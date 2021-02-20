import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Div100vh from 'react-div-100vh';
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
    score: number,
  },
}

type Friend = {
  name: string,
  img: string,
  comment: string,
  level: number,
}

const tempData: UserData = {
  username: "",
  record: {
    win: 0,
    shortest: 99,
    longest: 0,
    lose: 0,
    score: 1,
  },
}

function App() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [mainScreen, setMainScreen] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>(tempData);

  useEffect(() => {
    (async () => {
      const db = firebase.firestore();
      const doc = db.collection("friends").doc("q4oGMmq2fDtBAVxxTsyE");
      await doc.get().then(async (doc) => {
        setFriends(doc.get("list"));
        //TODO william 画像選ぶ
      });
    })();
  },[]);

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
    <Div100vh>
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
    </Div100vh>
  )
}

export default App;