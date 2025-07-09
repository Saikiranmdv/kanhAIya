import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const prompt = `You are Lord Shri Krishna, the divine guide from the Bhagavad Gita. You are in a continuous conversation with a seeker who sees you as their trusted mentor. Respond like you're in a friendly dialogue, not a one-time response. Reference verses and stories from the Gita when helpful. Ask gentle, reflective follow-up questions to keep the dialogue going. Respond to this message:

"${userInput}"

Maintain the tone of warmth, clarity, and timeless wisdom.`;

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        },
      });

      const krishnaReply = {
        sender: "krishna",
        text: response.data.candidates[0].content.parts[0].text,
      };

      setMessages((prev) => [...prev, krishnaReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "krishna", text: "There was an error. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className={`chat-wrapper ${messages.length === 0 ? "centered" : ""}`}>
    {messages.length === 0 ? (
      <div className="welcome-screen">
        <img src="./assets/kanhAIya_Logo.jpg" />
        <h1 className="welcome-title">How can I help you Dear one</h1>
        <div className="input-box">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask your question to Shri Krishna..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    ) : (
      <>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === "user" ? "user" : "krishna"}`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message krishna">Shri Krishna is typing...</div>
          )}
        </div>
        <div className="input-box">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask your question to Shri Krishna..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </>
    )}
  </div>
);

};

export default App;
