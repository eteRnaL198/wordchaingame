import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import firebase from "firebase";
import writeData from "./write/writeData";

//  writeData();

type Message = {
  text: string;
  from: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [placeholderText, setPlaceholderText] = useState<string>();
  const [playerName, setPlayerName] = useState<string>("player");
  const [opponentLastChar, setOpponentLastChar] = useState<string>("め");

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
    const emptyMessage = {
      text: "",
      from: "player"
    }
    // replyDialog(emptyMessage, "start", "init");
    replyDialog(emptyMessage, "start", "first");
  }, [])

  useEffect(() => {
    return () => {
      scrollBottom();
    }
  });

  const printReply = (newMessages: Message[], text: string) => {
    setTimeout(() => {
      setMessages([...messages, ...newMessages]);
      setPlaceholderText(text);
    }, 250);
  }

  const getLastChar = (word: string): string => {
    let char = word.slice(-1);
    // while()
    // if(char === "ー") char = word.slice(-2)[0];
    // if(newWord.match(/^[ぁ-んー]*$/)) {
    // TODO ひらがなになるまで下げる
    // チャー とかにも注意
    return char;
  }

  const isRepeated = (targetMessage: Message): boolean => {
    const tempMessages = messages.filter(message => message.text === targetMessage.text)
    if(tempMessages.length > 0) {
      return true
    } else {
      return false
    }
  }

  const getJudgePlayerMessage = (newPlayerMessage: Message): string => {
    if(newPlayerMessage.text.slice(-1) === 'ん') {
      return "endWithN"
    } else if(newPlayerMessage.text.slice(0)[0] !== opponentLastChar ) {
      return "wrongStart";
    } else if(isRepeated(newPlayerMessage)) {
      return "repeated";
    } else {
      return "continue";
    }
  }

  const replyConnectError = (newPlayerMessage?: Message) => {
    const newOpponentMessage = {
      text: "エラー発生！",
      from: "opponent"
    }
    printReply([newPlayerMessage as Message, newOpponentMessage], "ERROR !");
  }

  const replyDialog = async (newPlayerMessage: Message, docName: string, fieldName: string) => {
    const db = firebase.firestore();
    const dialogsDoc = db.collection("dialogs").doc(docName);
    await dialogsDoc.get().then( async (doc) => {
      const field = await doc.get(fieldName);
      if(field.message.length > 0) {
        printReply([newPlayerMessage, ...field.message], field.placeholderText);
        // ** の負け！
      } else {
        printReply([newPlayerMessage, field.message], field.placeholderText);
        // ** の負け！
      }
    })
    .catch(() => replyConnectError());
  }

  const replyNextMessage = async (newPlayerMessage: Message) => {
    const db = firebase.firestore();
    const wordsDoc = db.collection("words").doc("49cDTcDttW3Tpj3DMYA0");
    await wordsDoc.get().then((doc) => {
      const data = doc.data();
      if(data) {
        const playerLastChar = getLastChar(newPlayerMessage.text);
        const wordsArr = data[playerLastChar];
        const idx = Math.floor(Math.random() * wordsArr.length);
        const newOpponentMessage = {
          text: `${wordsArr[idx].text}  ( ${wordsArr[idx].desc} )`,
          from: "opponent"
        }
        if(isRepeated(newOpponentMessage)) {
          replyDialog(newPlayerMessage, "win", "noIdea");
        } else {
          const newOpponentLastChar = getLastChar(wordsArr[idx].text);
          setOpponentLastChar(newOpponentLastChar);
          printReply([newPlayerMessage, newOpponentMessage], `Start with 「${newOpponentLastChar}」`);
          return doc;
        };
      }
    })
    .catch(() => replyConnectError(newPlayerMessage));
  }

  const scrollBottom = () => {
    const chatsWrapper = document.getElementById("js_chats_wrapper");
    if(chatsWrapper) {
      const lastBalloon = chatsWrapper.lastElementChild;
      if(lastBalloon) lastBalloon.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  const handlePlayerWordAdd = (newWord: string) => {
    if(newWord.match(/^[ぁ-んー]*$/)) {
      const newPlayerMessage = {
        text: newWord,
        from: "player"
      }
      setMessages([...messages, newPlayerMessage]);
      const result = getJudgePlayerMessage(newPlayerMessage);
      if(result === "continue") {
        replyNextMessage(newPlayerMessage);
      } else {
        replyDialog(newPlayerMessage, "lose", result);
      }
    } else {
      const emptyMessage = {
        text: "",
        from: "player"
      }
      replyDialog(emptyMessage, "err", "kanaErr");
    }
  }

  return (
    <div className="main">
      <div className="chats_wrapper" id="js_chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} playerName={playerName} />
        ))}
      </div>
      <Input onPlayerWordAdd={handlePlayerWordAdd} placeholderText={placeholderText} />
    </div>
  );
}

export default App;