# KanhAIya – Chat with Shri Krishna

**KanhAIya** is a spiritual AI-powered chatbot that allows users to engage in a serene and insightful conversation with Shri Krishna. Inspired by the Bhagavad Gita, this app provides contextual wisdom and guidance for real-life problems in a conversational format.

---

## ✨ Features

* 🧠 Conversational AI modeled after Shri Krishna's teachings
* 📜 References to Bhagavad Gita verses and philosophy
* 💬 Chat-style interface for interactive guidance
* 🎨 Soothing and minimalistic UI for a meditative experience
* 🔄 Continuous dialogue flow like ChatGPT

---

## 🔧 Tech Stack

* **Frontend:** React.js (with Vite)
* **Styling:** CSS (customized for a calm UI)
* **AI Backend:** Google Gemini API (via REST)
* **Markdown Renderer:** `react-markdown`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Saikiranmdv/kanhaiya.git
cd kanhaiya
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Your API Key

Create a `.env` file in the root directory using the .env.example file:

```env
VITE_API_KEY=your_api_key
```

### 4. Run the App

```bash
npm run dev
```
---

## 🧘 How It Works

* The user types a question or concern.
* The app sends a prompt to the Google Gemini API with Krishna's persona.
* Shri Krishna responds with wisdom, referencing Gita teachings.
* The response is shown as a chat bubble and can be followed up like a real conversation.

---

## 📂 Project Structure

```
/src
├── App.jsx         # Main chat component
├── App.css         # Styles for the UI
├── main.jsx        # Entry point
└── index.html      # HTML template
```

---

## 🌐 Live Demo

You can try the app here: [KanhAIya Live](https://kanh-ai-ya.vercel.app/)

---

## 🙏 Credits

Made with devotion, inspired by the timeless wisdom of the Bhagavad Gita.
