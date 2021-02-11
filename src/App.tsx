import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import jsonData from "./data.json";
import firebase from "firebase";
import writeData from "./writeData";

//  writeData();

type Message = {
  word: string;
  from: string;
}

const useInitMessages = () => {
  const [messages, setMessages] = useState(jsonData);
  // TODO カスタムフックで管理、最初のセリフをfirestoreから取得する
  return [messages, setMessages];
}

function App() {
  const [messages, setMessages] = useState<Message[]>(jsonData);
  const [opponentLastChar, setOpponentLastChar] = useState<string>("め");

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    return () => {
      scrollBottom();
    }
    // 負け判定
  }, [messages]);

  const replyFromOpponent = async (newMyMessage: Message) => {
    const db = firebase.firestore();
    const docRef = db.collection("words").doc("2DJuqr2dqiRVJUSK5ugx");
    await docRef.get().then((res) => res)
    .catch((err: string) => {
      console.error(err);
      return null;
    })

    const lastChar = newMyMessage.word.slice(-1);
    const field = docRef.get(lastChar);
    
    const idx = Math.floor(Math.random() * data.length)
    const newOpponentMessage: Message = {
      word: `${data[idx].word}  ( ${data[idx].desc} )`,
      from: "opponent"
    }
    setMessages([...messages, newMyMessage]);
    setTimeout(() => {
      setMessages([...messages, newMyMessage, newOpponentMessage]);
      setOpponentLastChar(data[idx].word.slice(-1));
    }, 300);      

    if(!docRef) return null;
    // TODO ↑get({...})
    return null;
  }

  const scrollBottom = () => {
    const chatsWrapper = document.getElementById("js_chats_wrapper");
    if(chatsWrapper) {
      const lastBalloon = chatsWrapper.lastElementChild;
      if(lastBalloon) lastBalloon.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  const handleWordAdd = (newWord: string) => {
    const newMyMessage: Message = {
      word: newWord,
      from: "player"
    }
    
    replyFromOpponent(newMyMessage);
  }

  return (
    <div className="main">
      <div className="chats_wrapper" id="js_chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onWordAdd={handleWordAdd} lastChar={opponentLastChar} />
    </div>
  );
}

export default App;
