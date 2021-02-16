import React, { useState } from 'react';
import { Play, Home, Menu, Login } from "./components/index";
import writeData from "./data/writeData";

//  writeData();

type Message = {
  text: string;
  from: string;
}

type UserData = {
  username: string,
  messageHistory: Message[],
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({username: "", messageHistory:[]});

  const handleMainScreenChange = (screen: string) => {
    setMainScreen(screen);
  }

  const handleMenuOpenChange = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleUserData = (data: UserData) => {
    setUserData(data);
  }

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} onMainScreenChange={handleMainScreenChange} onMenuOpenChange={handleMenuOpenChange}/>
      <Home mainScreen={mainScreen} onMenuOpenChange={handleMenuOpenChange} userData={userData}/>
      <Play handleMessageAdd={setMessages} mainScreen={mainScreen} messages={messages} onMenuOpenChange={handleMenuOpenChange}/>
      <Login userData={userData} onUserData={handleUserData} />
    </>
  )
}

export default App;