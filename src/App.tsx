import React, { useState } from 'react';
import './assets/styles/App.css';
import { Chat } from "./components/index";
import Data from "./data.json";

function App() {
  const [messages, setMessages] = useState("");

  return (
    <div className="main">
      <Chat messages={messages} />
    </div>
  );
}

export default App;
