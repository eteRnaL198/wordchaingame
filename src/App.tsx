import React, { useState } from 'react';
import { Play, Home, Menu, Login } from "./components/index";
import writeData from "./data/writeData";

//  writeData();

type UserData = {
  username: string,
  record: {
    wins: number,
    shortest: number,
    longest: number,
    losses: number,
  },
}

const tempData = {
  username: "eteRnaL198",
  record: {
    wins: 0,
    shortest: 0,
    longest: 0,
    losses: 0,
  },
}
// TODO 消す

function App() {
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData>(tempData);

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