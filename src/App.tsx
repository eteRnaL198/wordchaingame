import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import jsonData from "./data.json";
import firebase from "firebase";
import writeData from "./writeData";

//  writeData();

type Message = {
  word: string;
  whose: string;
}

function App() {
  const [messages, setMessages] = useState(jsonData.messages);

  useEffect(() => {
    console.log(messages);
    // 負け判定
  }, [messages]);

  const fetchWord = (char: string) => {
    if(firebase.app.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCOIXzz4vmirffj94FLMWhEX0mE4t0UMTsxc",
        authDomain: "wordchaingame-3e0fc.firebaseapp.com",
        projectId: "wordchaingame-3e0fc",
        storageBucket: "wordchaingame-3e0fc.appspot.com",
        messagingSenderId: "307489909046",
        appId: "1:307489909046:web:4bb2441c4c44a671406b97"
      });
    }
    (async () => {
      const db = firebase.firestore();
      const doc = await db.collection("words").doc(char).get();
      const field = doc.get("a")
      const idx = Math.floor(Math.random() * field.length)
    })
    return field[idx].word;
  }  

  const handleWordAdd = (newWord: string) => {
    const newMessage: Message = {
      word: newWord,
      whose: "mine"
    }
    const lastChar = newWord.slice(-1);
    setMessages([...messages, newMessage]);
    const opponentWord = fetchWord(lastChar);
    const newOpponentMessage: Message = {
      word: opponentWord,
      whose: "others"
    }
    setMessages([...messages, opponentWord]);
  }

  return (
    <div className="main">
      <div className="chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onWordAdd={handleWordAdd} />
    </div>
  );
}

export default App;