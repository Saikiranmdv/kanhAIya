import React from 'react';
import ReactMarkdown from 'react-markdown';

const ChatMessage = ({ role, text }) => (
  <div className={`message ${role}`}> 
    <ReactMarkdown>{text}</ReactMarkdown>
  </div>
);

export default ChatMessage;
