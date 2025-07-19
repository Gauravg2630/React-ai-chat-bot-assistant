# AI Chat Assistant - React + Express + OpenRouter API

Welcome to my AI Chat Assistant project! This is an advanced chatbot built using React on the frontend and Express on the backend, integrated with OpenRouter’s free AI API for natural, conversational AI responses.

---

## Features

- Real-time chat interface built with React  
- Smooth, responsive UI with modern CSS styling  
- Backend powered by Express.js, handling API requests securely  
- AI-powered responses using OpenRouter API (free/open-source models)  
- Supports multi-turn conversations  
- Robust error handling and loading states  

---

## Project Structure

/backend
├── server.js # Express backend API server
├── .env # API key configuration (not committed)
/frontend
├── src/
├── components/ # React UI components (Message, ChatBox)
├── App.js # Main React app
├── App.css # Styling
└── index.js


---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager
- OpenRouter API key ([https://openrouter.ai](https://openrouter.ai))

### Installation

Clone the repo:
git clone https://github.com/yourusername/React-ai-chat-bot-assistant.git

Backend setup:
cd backend
npm install
Create a .env file with your API key:
OPENROUTER_API_KEY=your_openrouter_api_key_here
Start the backend server:
node server.js

Frontend setup:
cd ../frontend
npm install
npm start
Open http://localhost:3000 in your browser.

Usage:
Type your questions or prompts in the input box
Press Enter or click Send
The assistant responds in real-time with AI-generated answers
Enjoy natural conversational AI right in your browser!

Technologies Used:
React.js for frontend UI
Express.js for backend API
Axios for HTTP requests
OpenRouter API for AI-powered chat completions
CSS Flexbox and Grid for responsive layouts

Future Improvements:
Add user authentication
Store chat history with databases
Support voice input/output
Deploy with Docker and CI/CD pipelines

About Me
I am Gorav Gumber, a passionate web developer building real-world React projects while learning AI integration. This project marks my first advanced AI-powered application in my #100DaysOfReact journey.

License
MIT License © 2025 Gorav Gumber

Thank you for checking out my project! Feel free to ⭐️ the repo and follow me for more updates.