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

## 🛠️ Technical Architecture

### Data Processing Pipeline

1. **Documentation Ingestion**
   - Web scraping of CDP documentation sites using Cheerio
   - Content cleaning and structuring
   - Section identification and categorization

2. **Query Processing**
   - Intent classification via OpenAI API
   - Entity recognition for CDP platforms and features
   - Question reformulation for better matching

3. **Response Generation**
   - Context-aware answer composition using GPT
   - Step extraction and formatting
   - Source citation and reference linking

### Tech Stack

#### Frontend
- **EJS (Embedded JavaScript)**: Templating engine for rendering dynamic HTML pages
- **CSS & JavaScript**: Used for styling and interactive elements

#### Backend
- **Node.js**: JavaScript runtime for server-side execution
- **Express.js**: Web framework for handling routes and HTTP requests

#### Web Scraping & AI Integration
- **Cheerio**: For web scraping and extracting structured data from documentation
- **OpenAI API**: GPT-powered chatbot for natural language understanding

#### Deployment & Data Management
- **Static File Management**: Public directory used for CSS, JavaScript, and other assets
- **Render**: Cloud platform for deployment and hosting

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
- OpenAI API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ujjwalkumar72353/Chat-with-CredGpt.git
   cd Chat-with-CredGpt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following:
   ```
   PORT=3000
   OPENAI_API_KEY=your_openai_api_key
   NODE_ENV=development
   ```

4. Start the server
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

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
4. GPT generates a comprehensive answer from the relevant documentation
5. Response is formatted and presented to the user in the chat interface

## 🔮 Future Enhancements

1. **Enhanced Cross-CDP Comparisons**
   - Feature parity tables
   - Side-by-side implementation guides
   - Performance benchmarks

2. **Interactive Tutorials**
   - Visual guides with screenshots
   - Step-by-step interactive walkthroughs
   - Code samples and templates

3. **Improved Documentation Coverage**
   - More comprehensive scraping of documentation
   - Regular updates to keep information current
   - Support for additional CDPs

4. **Performance Optimizations**
   - Caching frequent queries
   - More efficient document retrieval
   - Reduced API calls to OpenAI

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
