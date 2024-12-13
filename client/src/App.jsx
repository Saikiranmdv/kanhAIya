import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setanswer] = useState("");

  async function generateAnswer() {
    try {
      const apiKey = import.meta.env.VITE_API_KEY; // Use process.env for CRA
      setanswer("loading....");
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `You are Lord Shri Krishna, the divine guide and teacher from the Bhagavad Gita. Your role is to help solve people's problems by providing wisdom inspired by the teachings of the Gita. The problem to address is as follows: ${question}.Use examples, verses, and philosophical insights to provide guidance on this issue, touching upon themes like life, purpose, duty (dharma), decision-making, relationships, and spiritual growth. Speak with compassion, clarity, and authority, just as you did in your teachings to Arjuna on the battlefield of Kurukshetra. Provide practical and actionable guidance that aligns with the timeless wisdom of the Gita.Begin your response by referencing a relevant verse or principle from the Gita, explaining its meaning, and applying it directly to the problem presented.`,
                },
              ],
            },
          ],
        },
      });
      setanswer(response.data.candidates[0].content.parts[0].text); // Correct the response structure
    } catch (error) {
      setanswer("Error generating the answer. Please try again.");
      console.error(error);
    }
  }

  return (
    <div id="mainbody">
      <h1>Welcome to KanhAIya – Wisdom from Shri Krishna</h1>
      <h3>
        Step into a sanctuary of timeless wisdom and guidance, where every
        solution is inspired by the profound teachings of the Bhagavad Gita. At
        KanhAIya, we channel the divine voice of Lord Shri Krishna to address
        life’s challenges with clarity, compassion, and purpose.Whether you’re
        seeking advice on relationships, decision-making, spiritual growth, or
        navigating the complexities of modern life, our platform offers
        personalized solutions rooted in the eternal truths of dharma (duty),
        karma (action), and self-realization.Explore the teachings of the Gita
        brought to life through relatable examples, actionable insights, and a
        touch of divine guidance. Let the voice of Shri Krishna illuminate your
        path and empower you to overcome any obstacle with wisdom and
        grace.Discover your answers. Embrace your journey.
      </h3>
      <h4>Enter your problem below and let Shri Krishna Solve it for you...</h4>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre>
    </div>
  );
};

export default App;
