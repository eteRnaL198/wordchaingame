import React, { useState } from 'react';
import { Rooms, Home, Menu, Login } from "./components/index";
import writeData from "./data/writeData";

//  writeData();

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    longest: number,
    lose: number,
  },
}

type Friend = {
  name: string,
  img: string,
  comment: string,
  level: number,
}

const tempData: UserData = {
  username: "eteRnaL198",
  record: {
    win: 0,
    shortest: 99,
    longest: 0,
    lose: 0,
  },
}

// TODO 消す

function App() {
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>(tempData);

  const friends: Friend[] = [
    {
      name: "Peter",
      img: 'https://storage.googleapis.com/wordchaingame-3e0fc.appspot.com/img/peter.jpg',
      comment: "I'm studying Japanese!",
      level: 5,
    },
    {
      name: "William",
      img: 'https://storage.googleapis.com/wordchaingame-3e0fc.appspot.com/img/peter.jpg',
      comment: "日本在住歴は３年です",
      level: 10,
    }
  ]

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
        handleMainScreenChange={handleMainScreenChange}
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
        handleUserData={handleUserData}
        userData={userData}
      />
    </>
  )
}

export default App;