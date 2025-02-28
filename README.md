# CDP Support Agent Chatbot

A specialized chatbot designed to answer "how-to" questions related to four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap.

**Live Demo**: [https://chat-with-credgpt-1.onrender.com](https://chat-with-credgpt-1.onrender.com)  
**Repository**: [https://github.com/ujjwalkumar72353/Chat-with-CredGpt](https://github.com/ujjwalkumar72353/Chat-with-CredGpt)

![CDP Support Agent Chatbot](https://via.placeholder.com/800x400)

## 📋 Project Overview

This Support Agent Chatbot serves as a knowledge assistant for users working with Customer Data Platforms. It extracts relevant information from official documentation of major CDPs to provide step-by-step guidance on platform-specific tasks, feature implementations, and technical configurations.

## ✅ Implementation Status

### Core Functionalities
- [x] Basic chat interface with message history
- [x] Question processing and intent recognition
- [x] Documentation extraction and parsing
- [x] Response generation for how-to questions
- [x] CDP-specific knowledge base integration
- [x] Question validation and filtering

### Platform Coverage
- [x] Segment CDP support
- [x] mParticle CDP support
- [x] Lytics CDP support
- [x] Zeotap CDP support

### Special Features
- [x] Handling question variations and phrasing differences
- [x] Processing lengthy/complex questions
- [x] Filtering non-CDP related questions
- [x] Providing step-by-step instructions
- [ ] Cross-CDP feature comparisons
- [ ] Advanced platform-specific configurations
- [ ] Custom integration guides

## 🛠️ Technical Architecture

### Data Processing Pipeline

1. **Documentation Ingestion**
   - Web scraping of CDP documentation sites
   - Content cleaning and structuring
   - Section identification and categorization

2. **Document Indexing**
   - Vector embeddings for semantic search
   - Inverted index for keyword matching
   - Document chunking for efficient retrieval

3. **Query Processing**
   - Intent classification
   - Entity recognition for CDP platforms and features
   - Question reformulation for better matching

4. **Response Generation**
   - Context-aware answer composition
   - Step extraction and formatting
   - Source citation and reference linking

### Tech Stack

#### Frontend
- **React.js**: For building the interactive chat interface
- **Tailwind CSS**: For styling and responsive design
- **Socket.io-client**: For real-time communication with the server

#### Backend
- **Node.js**: JavaScript runtime for server-side code
- **Express.js**: Web framework for handling HTTP requests
- **LangChain**: Framework for working with language models and document processing
- **Vector Database** (Pinecone/Weaviate): For semantic search capabilities
- **OpenAI API**: For natural language understanding and generation

#### Document Processing
- **Cheerio/Puppeteer**: For web scraping documentation
- **pdf.js**: For parsing PDF documentation
- **natural**: NLP library for text processing

#### Deployment
- **Render**: For hosting the application
- **MongoDB**: For storing chat history and user sessions
- **Redis**: For caching frequent queries

## 📚 Knowledge Base Sources

The chatbot extracts information from official documentation of four major CDPs:

- **Segment Documentation**: [https://segment.com/docs/?ref=nav](https://segment.com/docs/?ref=nav)
- **mParticle Documentation**: [https://docs.mparticle.com/](https://docs.mparticle.com/)
- **Lytics Documentation**: [https://docs.lytics.com/](https://docs.lytics.com/)
- **Zeotap Documentation**: [https://docs.zeotap.com/home/en-us/](https://docs.zeotap.com/home/en-us/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)
- OpenAI API key or equivalent

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ujjwalkumar72353/Chat-with-CredGpt.git
   cd Chat-with-CredGpt
   ```

2. Install dependencies
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   NODE_ENV=development
   ```

4. Start the development server
   ```bash
   # Run both frontend and backend
   npm run dev
   
   # Or run separately
   npm run server  # Backend only
   npm run client  # Frontend only
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 💬 Example Interactions

### Basic How-To Questions
- "How do I set up a new source in Segment?"
- "How can I create a user profile in mParticle?"
- "How do I build an audience segment in Lytics?"
- "How can I integrate my data with Zeotap?"

### Advanced Questions
- "What's the best way to track e-commerce events in Segment?"
- "How can I implement cross-device identity resolution in mParticle?"
- "What are the steps to create a lookalike audience in Lytics?"
- "How do I configure real-time data synchronization in Zeotap?"

### Cross-CDP Comparisons
- "How does Segment's audience creation process compare to Lytics'?"
- "What are the differences between mParticle and Zeotap for mobile app tracking?"

## 🔍 How It Works

### Document Processing Workflow
1. Documentation is scraped from official CDP websites
2. Content is cleaned, parsed, and split into chunks
3. Text chunks are embedded and stored in vector database
4. Metadata and structure are preserved for context

### Query-Response Flow
1. User submits a question through the chat interface
2. Question is analyzed for intent and CDP-specific entities
3. Relevant documentation sections are retrieved using semantic search
4. Answer is generated from retrieved context
5. Response is formatted and presented to the user

## 🔮 Future Enhancements

1. **Enhanced Cross-CDP Comparisons**
   - Feature parity tables
   - Side-by-side implementation guides
   - Performance benchmarks

2. **Interactive Tutorials**
   - Visual guides with screenshots
   - Step-by-step interactive walkthroughs
   - Code samples and templates

3. **Personalized Recommendations**
   - User-specific implementation advice
   - Industry-specific best practices
   - Use case optimization suggestions

4. **Multi-language Support**
   - Documentation in multiple languages
   - Question-answering in user's preferred language

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Based on official documentation from Segment, mParticle, Lytics, and Zeotap
- Built as an assignment project
- Special thanks to all contributors

---

Created by [Ujjwal Kumar](https://github.com/ujjwalkumar72353)
