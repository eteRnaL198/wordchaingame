import React, { useEffect, useState } from 'react';
import { Play, Home, Menu, Login } from "./components/index";
import firebase from "firebase";
import writeData from "./data/writeData";

//  writeData();

type Message = {
  text: string;
  from: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("hoge");

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

  const handleMainScreenChange = (screen: string) => {
    setMainScreen(screen);
  }

  const handleMenuOpenChange = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleUsername = (newName: string) => {
    setUsername(newName);
  }

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} onMainScreenChange={handleMainScreenChange} onMenuOpenChange={handleMenuOpenChange}/>
      <Home mainScreen={mainScreen} onMenuOpenChange={handleMenuOpenChange} username={username}/>
      <Play handleMessageAdd={setMessages} mainScreen={mainScreen} messages={messages} onMenuOpenChange={handleMenuOpenChange}/>
      <Login username={username} />
    </>
  )
}

export default App;