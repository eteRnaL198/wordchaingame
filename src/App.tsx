import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import firebase from "firebase";
import writeData from "./writeData";

//  writeData();

type Message = {
  text: string;
  from: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [placeholderText, setPlaceholderText] = useState<string>();
  const [playerName, setPlayerName] = useState<string>("player");

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
    (async () => {
      const db = firebase.firestore();
      const dialogsDoc = db.collection("dialogs").doc("start");
      await dialogsDoc.get().then((doc) => {
        // printReply([doc.get("greeting"), doc.get("registration")], "Enter your name !");
        printReply([doc.get("greeting"), doc.get("first")], "Start with 「め」");
      })
      .catch(() => replyConnectError());
    })();

  }, [])

  useEffect(() => {
    return () => {
      scrollBottom();
    }
  }, [messages]);

  const printReply = (newMessages: Message[], text: string) => {
    setTimeout(() => {
      setMessages([...messages, ...newMessages]);
      setPlaceholderText(text);
    }, 250);
  }

  const getLastChar = (word: string): string => {
    let char = word.slice(-1);
    if(char === "ー") char = word.slice(-2)[0];
    // TODO 小さい文字も
    return char;
  }

  const isRepeated = (newMessage: Message): boolean => {
    const tempMessages = messages.filter(message => message.text === newMessage.text)
    if(tempMessages.length) {
      return true
    } else {
      return false
    }
  }

  const judgePlayerMessage = (newPlayerMessage: Message): boolean => {
    // TODO is** の方がいいかも？ チャー とかにも注意
    const newOpponentMessage = (newText: string): Message => ({
        text: newText,
        from: "opponent"
    })
    if(newPlayerMessage.text.slice(-1) === 'ん') {
      printReply([newPlayerMessage, newOpponentMessage("ん で終わってるよ 君の負け！")], "Thank you for playing !!");
      return false;
    } else if(placeholderText && newPlayerMessage.text.slice(0)[0] !== placeholderText.slice(-2)[0]) {
      printReply([newPlayerMessage, newOpponentMessage("で始まってないよ 君の負け！")], "Thank you for playing !!");
      return false;
    } else if(isRepeated(newPlayerMessage)) {
      return false;
    } else {
      return true;
    }
  }

  const judgeOpponentMessage = (newOpponentMessage: Message) => {

  }

  const replyConnectError = (newPlayerMessage?: Message) => {
    const newOpponentMessage = {
      text: "エラー発生！インターネットの接続状況を確認してね",
      from: "opponent"
    }
    printReply([newPlayerMessage as Message, newOpponentMessage], "ERROR !");
  }

  const replyNextWord = async (newPlayerMessage: Message) => {
    const db = firebase.firestore();
    const wordsDoc = db.collection("words").doc("49cDTcDttW3Tpj3DMYA0");
    await wordsDoc.get().then((doc) => {
      const data = doc.data();
      if(data) {
        const playerLastChar = getLastChar(newPlayerMessage.text);
        const elem = data[playerLastChar];
        const idx = Math.floor(Math.random() * elem.length)
        const newOpponentMessage = {
          text: `${elem[idx].text}  ( ${elem[idx].desc} )`,
          from: "opponent"
        }
        const opponentLastChar = getLastChar(elem[idx].text);
        printReply([newPlayerMessage, newOpponentMessage], `Start with 「${opponentLastChar}」`);
      }
    })
    .catch(() => replyConnectError(newPlayerMessage))

    return null;
  }

  const replyResult = async (newPlayerMessage: Message) => {
    const db = firebase.firestore();
    const dialogsDoc = db.collection("dialogs").doc("lose");
  }

  const scrollBottom = () => {
    const chatsWrapper = document.getElementById("js_chats_wrapper");
    if(chatsWrapper) {
      const lastBalloon = chatsWrapper.lastElementChild;
      if(lastBalloon) lastBalloon.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  const handleWordAdd = (newWord: string) => {
    if(newWord.match(/^[ぁ-んー]*$/)) {
      const newPlayerMessage: Message = {
        text: newWord,
        from: "player"
      }
      setMessages([...messages, newPlayerMessage]);
      if(judgePlayerMessage(newPlayerMessage)) {
        replyNextWord(newPlayerMessage);
      }
    } else {
      const newOpponentMessage = {
        text: "ひらがな で入力してね",
        from: "opponent"
      }
      printReply([newOpponentMessage], "Only accept ひらがな");
    }
  }

  return (
    <div className="main">
      <div className="chats_wrapper" id="js_chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} playerName={playerName} />
        ))}
      </div>
      <Input onWordAdd={handleWordAdd} lastChar={placeholderText} />
    </div>
  );
}

export default App;
