import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import jsonData from "./data.json";
import firebase from "firebase";

type Message = {
  text: string;
  whose: string;
}

(() => {
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
  const docRef = db.collection("words").doc("a_line");
  docRef.get().then((doc) => {
    console.log("Document data:", doc.data());
  })
})();

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

// TODO  https://xn--68j8a5fb.net/ 単語写す