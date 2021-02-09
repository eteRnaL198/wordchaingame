import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import jsonData from "./data.json";
import firebase from "firebase";
import writeData from "./writeData";

//  writeData();

type Message = {
  text: string;
  whose: string;
}


const fetchWord = async (char: string) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCOIXzz4vmffj94FLMWhEX0mE4t0UMTsxc",
    authDomain: "wordchaingame-3e0fc.firebaseapp.com",
    projectId: "wordchaingame-3e0fc",
    storageBucket: "wordchaingame-3e0fc.appspot.com",
    messagingSenderId: "307489909046",
    appId: "1:307489909046:web:4bb2441c4c44a671406b97"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  const docRef = db.collection("words").doc("k");
  docRef.get().then((doc) => {
    console.log(doc);
  }).catch((err) => {
    console.error(err);
  })

}

function App() {
  const [messages, setMessages] = useState(jsonData.messages);

  useEffect(() => {
    console.log(messages);
    // 負け判定
  }, [messages]);

  const handleTextAdd = (newText: string) => {
    const newMessage: Message = {
      text: newText,
      whose: "mine"
    }

    const lastChar = newText.slice(-1);
    fetchWord(lastChar);

    console.log(lastChar);
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