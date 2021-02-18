import React, { useState } from 'react';
import { Rooms, Home, Menu, Login } from "./components/index";
import icon from "./assets/img/peter.jpg";
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

  const friends = ["Peter", "William"];
  const tempFriends: Friend[] = [
    {
      name: "Peter",
      img: icon,
      comment: "I'm studying Japanese!",
      level: 5,
    },
    {
      name: "William",
      img: "./assets/img/opponent.jpg",
      comment: "日本に住んで２年が経ちました",
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