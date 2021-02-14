import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Play } from "./components/index";
import firebase from "firebase";
import writeData from "./data/writeData";

//  writeData();

type Message = {
  text: string;
  from: string;
}

function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playerName, setPlayerName] = useState<string>("player"); // TODO playerName? username?
  const [messages, setMessages] = useState<Message[]>([]);

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
    }
  });

  const isDuplicated = (targetMessage: Message): boolean => {
    const tempMessages = messages.filter(message => message.text === targetMessage.text)
    if(tempMessages.length > 0) {
      return true
    } else {
      return false
    }
  }

  return isPlaying ? (
    <Play handleMessageAdd={setMessages} messages={messages}/>
  ) : (
    <>
      {/* <Home />
      <Informations />
      <Friends /> */}
    </>
  )
}

export default App;