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

type FetchWord = (char: string) => Promise<string | null>;

const scrollBottom = () => {
  const chatsWrapper = document.getElementById("js_chats_wrapper");
  if(chatsWrapper) {
    const lastBalloon = chatsWrapper.lastElementChild;
    if(lastBalloon) lastBalloon.scrollIntoView({ behavior: "smooth", block: "end" });
  }
}

function App() {
  const [messages, setMessages] = useState<Message[]>(jsonData.messages);

  useEffect(() => {
    console.log(messages);
    return () => {
      scrollBottom();
    }
    // 負け判定
  }, [messages]);

  const updateMessage = async (newMyMessage: Message) => {
    if(!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCOIXzz4vmirffj94FLMWhEX0mE4t0UMTsxc",
        authDomain: "wordchaingame-3e0fc.firebaseapp.com",
        projectId: "wordchaingame-3e0fc",
        storageBucket: "wordchaingame-3e0fc.appspot.com",
        messagingSenderId: "307489909046",
        appId: "1:307489909046:web:4bb2441c4c44a671406b97"
      });
    }
    const db = firebase.firestore();
    const lastChar = newMyMessage.word.slice(-1);
    console.log(lastChar);
    const doc = await db.collection("words").doc(lastChar).get()
      .then((res) => res)
      .catch((err) => {
        console.error(err);
        return null;
      })
    if(!doc) return null;
    // const doc = await db.collection("words").doc(char).get();
    const field = await doc.get("a")
    const idx = Math.floor(Math.random() * field.length)
    const newOthersMessage: Message = {
          word: `${field[idx].word}  ( ${field[idx].desc} )`,
          whose: "others"
    }
    setMessages([...messages, newMyMessage, newOthersMessage]);
    return null;
    // return field[idx].word;
  }
   

  const handleWordAdd = (newWord: string) => {
    const newMyMessage: Message = {
      word: newWord,
      whose: "mine"
    }
    updateMessage(newMyMessage);
  }

  return (
    <div className="main">
      <div className="chats_wrapper" id="js_chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onWordAdd={handleWordAdd} />
    </div>
  );
}

export default App;