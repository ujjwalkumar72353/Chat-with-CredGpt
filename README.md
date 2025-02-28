# CDP Support Agent Chatbot

A specialized AI-powered chatbot designed to answer "how-to" questions for four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Try%20it%20now-blue)](https://chat-with-credgpt-1.onrender.com)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-green)](https://github.com/ujjwalkumar72353/Chat-with-CredGpt)

## 📋 Project Overview

This CDP Support Agent Chatbot serves as an intelligent knowledge assistant for users working with Customer Data Platforms. It extracts relevant information from the official documentation of major CDPs to provide step-by-step guidance on:

- Platform-specific tasks and workflows
- Feature implementations and configurations
- Technical troubleshooting and best practices
- Cross-platform comparisons and recommendations

## ✅ Features

### Core Functionality
- 💬 Interactive chat interface with persistent message history
- 🧠 Advanced question processing and intent recognition
- 📚 Documentation extraction and intelligent parsing
- 📝 Detailed response generation for how-to questions
- 🔄 Context-aware follow-up question handling

### Platform Coverage
- [x] **Segment CDP** support
- [x] **mParticle CDP** support
- [x] **Lytics CDP** support
- [x] **Zeotap CDP** support

### Special Features
- 🔍 Handling of question variations and different phrasings
- 📊 Processing of complex, multi-part questions
- 🚫 Filtering of non-CDP related questions
- 📋 Providing clear, step-by-step instructions

## 🛠️ Technical Architecture

### Data Processing Pipeline

#### Documentation Ingestion
- Web scraping of CDP documentation sites using Cheerio
- Content cleaning and structural organization
- Section identification and contextual categorization

#### Query Processing
- Intent classification via OpenAI API
- Entity recognition for CDP platforms and features
- Question reformulation for optimal matching

#### Response Generation
- Context-aware answer composition using OpenAI GPT models
- Step extraction and coherent formatting
- Source citation and reference linking

### Tech Stack

#### Frontend
- **EJS (Embedded JavaScript)**: Templating engine for dynamic HTML pages
- **CSS & JavaScript**: UI styling and interactive elements

#### Backend
- **Node.js**: JavaScript runtime for server-side execution
- **Express.js**: Web framework for handling routes and HTTP requests

#### AI & Data Processing
- **Cheerio**: Web scraping and structured data extraction
- **OpenAI API**: Natural language understanding and response generation
- **Pinecone**: Vector database for efficient knowledge retrieval

#### Deployment
- **Render**: Cloud platform for deployment and hosting

## 📚 Knowledge Base Sources

The chatbot draws information from official documentation of four major CDPs:

- **Segment Documentation**: [https://segment.com/docs/](https://segment.com/docs/?ref=nav)
- **mParticle Documentation**: [https://docs.mparticle.com/](https://docs.mparticle.com/)
- **Lytics Documentation**: [https://docs.lytics.com/](https://docs.lytics.com/)
- **Zeotap Documentation**: [https://docs.zeotap.com/](https://docs.zeotap.com/home/en-us/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key
- Pinecone API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ujjwalkumar72353/Chat-with-CredGpt.git
   cd Chat-with-CredGpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory with the following:
   ```
   OPENAI_API_KEY=your_openai_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Access the application**  
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Chat-with-CredGpt/
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # Client-side JavaScript
│   └── images/           # Image assets
├── views/                # EJS templates
│   ├── index.ejs         # Main chat interface
│   └── partials/         # Reusable template parts
├── routes/               # Express routes
├── controllers/          # Request handlers
├── services/             # Business logic
│   ├── scraper.js        # Documentation scraping logic
│   └── chatbot.js        # OpenAI integration
├── utils/                # Helper functions
├── app.js                # Express application setup
└── server.js             # Server entry point
```

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
1. Documentation is scraped from official CDP websites using Cheerio
2. Content is cleaned, parsed, and structured for efficient retrieval
3. Information is organized by CDP platform and feature categories

### Query-Response Flow
1. User submits a question through the chat interface
2. Question is analyzed using OpenAI's natural language understanding
3. Relevant documentation sections are identified based on the query
4. OpenAI generates a comprehensive answer from the relevant documentation
5. Response is formatted and presented to the user in the chat interface

## 🔮 Future Enhancements

### Enhanced Cross-CDP Comparisons
- Feature parity tables
- Side-by-side implementation guides
- Performance benchmarks

### Interactive Tutorials
- Visual guides with screenshots
- Step-by-step interactive walkthroughs
- Code samples and templates

### Improved Documentation Coverage
- More comprehensive scraping of documentation
- Regular updates to keep information current
- Support for additional CDPs

### Performance Optimizations
- Caching frequent queries
- More efficient document retrieval
- Reduced API calls to OpenAI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

Created by [Ujjwal Kumar](https://github.com/ujjwalkumar72353)
