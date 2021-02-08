import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import jsonData from "./data.json";

type Message = {
  text: string;
  whose: string;
}

function App() {
  const [messages, setMessages] = useState(jsonData.messages);

  const handleTextAdd = (newText: string) => {
    const newMessage: Message = {
      text: newText,
      whose: "mine"
    }
    setMessages([...messages, newMessage]);
  }

  return (
    <div className="main">
      <div className="chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onTextAdd={handleTextAdd} />
    </div>
  );
}

export default App;
