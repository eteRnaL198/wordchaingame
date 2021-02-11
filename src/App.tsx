import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import { Chat, Input } from "./components/index";
import firebase from "firebase";
import writeData from "./writeData";

//  writeData();

type Message = {
  word: string;
  from: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [placeholderText, setPlaceholderText] = useState<string>();

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
        const initMessages: Message[] = [
          {
            word: "こんにちは！",
            from: "opponent"
          },
          {
            word: doc.get("word"),
            from: "opponent"
          }
        ]
        setMessages(initMessages);
        printReply(initMessages, "Enter your name !");
      })
      .catch((err) => {
        console.error(err);
      })
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
    return char;
  }

  const judgeWord = (newWord: string): boolean => {
    console.log(newWord.slice(0));
    const newPlayerMessage = {
      word: newWord,
      from: "player"
    }
    const newOpponentMessage = (newWord: string): Message => ({
        word: newWord,
        from: "opponent"
    })
    if(newWord.slice(-1) === 'ん') {
      printReply([newPlayerMessage, newOpponentMessage("ん で終わってるよ")], "Thank you for playing !!");
      return false;
    } else if(placeholderText && newWord.slice(1)[0] === placeholderText.slice(-2)[0]) {
      printReply([newPlayerMessage, newOpponentMessage("で始まってないよ")], "Thank you for playing !!");
      return false;
    } else {
      return true;
    }
  }

  const replyNextWord = async (newPlayerMessage: Message) => {
    const db = firebase.firestore();
    const wordsDoc = db.collection("words").doc("2DJuqr2dqiRVJUSK5ugx");
    await wordsDoc.get().then((doc) => {
      const data = doc.data();
      if(data) {
        const playerLastChar = getLastChar(newPlayerMessage.word);
        const elem = data[playerLastChar];
        const idx = Math.floor(Math.random() * elem.length)
        const newOpponentMessage = {
          word: `${elem[idx].word}  ( ${elem[idx].desc} )`,
          from: "opponent"
        }
        const opponentLastChar = getLastChar(elem[idx].word);
        printReply([newPlayerMessage, newOpponentMessage], `Start with 「${opponentLastChar}」`);
      }
    })
    .catch(() => {
      const newOpponentMessage = {
        word: "エラー発生！再度入力してね！",
        from: "opponent"
      }
      printReply([newPlayerMessage, newOpponentMessage], "ERROR !");
      return null;
    })

    return null;
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
        word: newWord,
        from: "player"
      }
      setMessages([...messages, newPlayerMessage]);
      if(judgeWord(newWord)) {
        replyNextWord(newPlayerMessage);
      }
    } else {
      const newOpponentMessage = {
        word: "ひらがな で入力してね！",
        from: "opponent"
      }
      printReply([newOpponentMessage], "Only accept ひらがな");
    }
  }

  return (
    <div className="main">
      <div className="chats_wrapper" id="js_chats_wrapper">
        {messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onWordAdd={handleWordAdd} lastChar={placeholderText} />
    </div>
  );
}

export default App;
