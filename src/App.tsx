import React, { useState } from 'react';
import { Rooms, Home, Menu, Login } from "./components/index";
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>(tempData);

  const friends = ["Peter", "William"];

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
      <Menu
        friends={friends}
        handleMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        onMainScreenChange={handleMainScreenChange}
      />
      <Home
        handleMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
        mainScreen={mainScreen}
        userData={userData}
      />
      <Rooms
        friends={friends}
        handleMenuToggle={handleMenuToggle}
        handleUserData={handleUserData}
        isMenuOpen={isMenuOpen}
        mainScreen={mainScreen}
        userData={userData}
      />
      <Login
        userData={userData}
        handleUserData={handleUserData}
      />
    </>
  )
}

export default App;