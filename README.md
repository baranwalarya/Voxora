
# Voxora 🎙️

Voxora is an AI-powered voice assistant and website navigation platform built using the MERN stack. It allows users to interact with a website using natural voice commands and receive real-time AI-powered responses.

## 🚀 Features

- 🎙️ Voice-based interaction
- 🤖 AI-powered conversational responses
- 🧭 Voice-controlled website navigation
- 🗣️ Speech-to-Text and Text-to-Speech
- ⚡ Real-time responses
- 🏢 Custom business knowledge support
- 🌐 Easy website integration
- 📱 Responsive and modern UI
- 🔐 Secure backend API integration

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB

### AI & APIs
- Google Gemini API
- Speech Recognition
- Text-to-Speech

## 📂 Project Structure

Voxora/
│
├── Client/
│   ├── src/
│   └── package.json
│
├── Server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── package.json
│
└── .gitignore

## ⚙️ Installation

### 1. Clone the repository

git clone https://github.com/your-username/Voxora.git

### 2. Install Frontend Dependencies

cd Client
npm install

### 3. Install Backend Dependencies

cd ../Server
npm install

### 4. Configure Environment Variables

Create a `.env` file inside the `Server` folder and add the required environment variables.

Example:

PORT=8000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

> Never upload your `.env` file or API keys to GitHub.

### 5. Run the Backend

cd Server
npm run dev

### 6. Run the Frontend

Open another terminal:

cd Client
npm run dev

## 🎯 Objective

The main objective of Voxora is to make website interaction easier and more accessible by allowing users to navigate and interact with web applications through natural voice commands instead of traditional mouse and keyboard interactions.

## 🔮 Future Enhancements

- Multi-language voice support
- More advanced website automation
- Personalized user preferences
- Voice-based form filling
- Improved contextual conversations
- Analytics dashboard

## 👩‍💻 Author

Arya Baranwal

## 📄 License

This project is developed for educational and learning purposes.
