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

type Data = {
  username: string,
  record: {
    wins: number,
    shortest: number,
    longest: number,
    losses: number,
  }

}

function App() {
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData>({username: "eteRnaL198", messageHistory:[]});
  // TODO 初期値戻す

  const handleMainScreenChange = (screen: string) => {
    setMainScreen(screen);
  }

  const handleUserData = (data: UserData) => {
    setUserData(data);
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Menu handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} onMainScreenChange={handleMainScreenChange} />
      <Home handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} mainScreen={mainScreen} userData={userData} />
      <Play handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} mainScreen={mainScreen} />
      <Login userData={userData} onUserData={handleUserData} />
    </>
  )
}

export default App;