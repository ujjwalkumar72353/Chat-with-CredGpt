const axios = require("axios");

const renderChat = async (req, res) => {
  try {
    return res.render("chat_updated");
  } catch (err) {
    console.log(err);
  }
};

// ::::::::::::::::::::::;;;; Chat bot start;;;;;;;;::::::::::::
const { ChatGroq } = require("@langchain/groq");
const { Pinecone } = require("@pinecone-database/pinecone");
require("dotenv").config();

// Initialize Pinecone
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const indexName = "citiwise-open";
const index = pc.index(indexName);

// Initialize ChatGroq
const llm = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0,
  maxTokens: undefined,
  maxRetries: 2,
});

// Function to get embeddings from a prompt
async function getEmbeddings(prompt) {
  const model = "multilingual-e5-large"; // Your model here
  const embeddings = await pc.inference.embed(model, [prompt], {
    inputType: "query",
  });
  return embeddings[0].values; // Return the embedding vector
}

// Function to query the Pinecone index
async function queryPinecone(embedding) {
  const queryResponse = await index.namespace("main-citi-site").query({
    topK: 3,
    vector: embedding,
    includeValues: false,
    includeMetadata: true,
  });

  return queryResponse.matches; // Return the matched documents
}

// Function to invoke the ChatGroq API with LLM
async function invokeChatGroq(messages) {
  const aiMsg = await llm.invoke(messages);
  return aiMsg; // Return the response from LLM
}

// Chatbot class to manage conversation state
class FinancialChatbot {
  constructor() {
    this.messages = [];
    this.turnLimit = 5; // Limit to last 5 turns
  }

  // Add message to the conversation
  addMessage(role, content) {
    this.messages.push({ role, content });
    // Maintain only the last 'turnLimit' messages
    if (this.messages.length > this.turnLimit) {
      this.messages.shift(); // Remove the oldest message
    }
  }

  // Main function to handle user query
  async handleUserQuery(userData, userPrompt) {
    // Get embeddings for the user prompt
    const embedding = await getEmbeddings(userPrompt);

    // Query the Pinecone index for relevant documents
    const references = await queryPinecone(embedding);

    // let internetResults = await tool.invoke(userPrompt);

    // const internetReferenceContent = internetResults
    //   .map((result) => result.snippet || result.title || "")
    //   .join("\n");

    // console.log("Internet Search Results:", internetReferenceContent);
    // Prepare messages for LLM including references
    const referenceContent = references.map((ref) => ref.metadata).join("\n"); // Combine reference metadata into a string
    const messages = [
      {
        role: "system",
        content:
          "You are a support agent specializing in Segment, mParticle, Lytics, and Zeotap. Answer 'how-to' questions accurately using official documentation. Keep responses clear, concise, and relevant. Ignore unrelated queries. Provide CDP comparisons if asked.",
      },
      {
        role: "system",
        content: JSON.stringify(userData),
      },
      { role: "system", content: this.messages.toString() },
      { role: "user", content: userPrompt },
      // {
      //   role: "system",
      //   content: `Internet Search Results:\n${internetReferenceContent}`,
      // },
      { role: "system", content: `References:\n${referenceContent}` },
    ];

    // Invoke ChatGroq API to get response from LLM
    const llmResponse = await invokeChatGroq(messages);
    const ans = llmResponse.content;

    // Add user and assistant messages to the conversation
    this.addMessage("user", userPrompt);
    this.addMessage("assistant", ans);

    // Construct the final response
    return {
      response: ans,
      references: references.map((ref) => ref.metadata), // Return references as well
    };
  }
}

async function fetchLiveData(urls) {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await axios.get(url);
        return { url, data: response.data.substring(0, 1000) }; // Limit content size
      })
    );
    return responses;
  } catch (error) {
    console.error("Error fetching live data:", error);
    return [];
  }
}

const chatbot = new FinancialChatbot();

const getResponse = async (req, res) => {
  const userId = req.userId;
  const { userPrompt } = req.body;

  console.log("User Prompt:", userPrompt);

  try {
    // Fetch live data
    const liveSources = [
      "https://segment.com/docs/?ref=nav",
      "https://docs.mparticle.com/",
      "https://docs.lytics.com/",
      "https://docs.zeotap.com/home/en-us/",
    ];
    const liveData = await fetchLiveData(liveSources);
    const userFinancialData = liveData
      .map((data) => `Source: ${data.url}\n${data.data}`)
      .join("\n");

    // Fetch user data and populate related fields
    // const userFinancialData = await User.findById(userId)
    // .populate([
    //   { path: "accounts" },
    //   {
    //     path: "familyId",
    //     populate: { path: "members" }, // Populating members within familyId
    //   },
    // ])
    // .exec();

    console.log("User Financial Data:", userFinancialData);
    /* My Post Requst Imple:  */

    /* End My Post Request Imple. */

    // Handle chatbot user query
    const response = await chatbot.handleUserQuery(
      userFinancialData,
      userPrompt
    );

    console.log("Bot Response:", response["response"]);

    // Send response back to client
    res.json({ botResponse: response["response"] });
  } catch (error) {
    console.log("Error handling user query:", error);

    // Send error response to client
    res.json({ err: error.message });
  }
};

// ::::::::::::::::::::::;;;; Chat bot End;;;;;;;;::::::::::::
module.exports = {
  getResponse,

  renderChat,
};

// Liabilities
