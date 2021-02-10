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

const fetchWord = async (char: string) => {
  const db = firebase.firestore();
  const ref = await db.collection("words").doc(char);
  const doc = await ref.get()
  console.log(doc.get("a")[0].word);
  // TODO インデックスは乱数
}

function App() {
  const [messages, setMessages] = useState(jsonData.messages);

  useEffect(() => {
    console.log(messages);
    // 負け判定
  }, [messages]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCOIXzz4vmffj94FLMWhEX0mE4t0UMTsxc",
      authDomain: "wordchaingame-3e0fc.firebaseapp.com",
      projectId: "wordchaingame-3e0fc",
      storageBucket: "wordchaingame-3e0fc.appspot.com",
      messagingSenderId: "307489909046",
      appId: "1:307489909046:web:4bb2441c4c44a671406b97"
    };
    firebase.initializeApp(firebaseConfig);
  },[]);

  const handleTextAdd = (newWord: string) => {
    const newMessage: Message = {
      word: newWord,
      whose: "mine"
    }
    // TODO text -> word に全て直す
    const lastChar = newWord.slice(-1);
    const opponentWord = fetchWord(lastChar);
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