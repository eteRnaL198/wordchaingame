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

const useInitMessages = () => {
  const [messages, setMessages] = useState();
  // TODO カスタムフックで管理、最初のセリフをfirestoreから取得する
  return [messages, setMessages];
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [placeholderText, setPlaceholderText] = useState<string>("名前を入力してください");

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
      const docRef = db.collection("dialogs").doc("start");
      await docRef.get().then((doc) => {
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
    // 負け判定
  }, [messages]);

  const printReply = (newPlayerMessage: Message, newOpponentMessage: Message, text: string) => {
    setTimeout(() => {
      setMessages([...messages, newPlayerMessage, newOpponentMessage]);
      setPlaceholderText(text);
    }, 250);
  }

  const replyNextWord = async (newPlayerMessage: Message) => {
    const db = firebase.firestore();
    const wordsDoc = db.collection("words").doc("2DJuqr2dqiRVJUSK5ugx");
    await wordsDoc.get().then((doc) => {
      const data = doc.data();
      if(data) {
        const playerLastChar = newPlayerMessage.word.slice(-1);
        const elem = data[playerLastChar];
        const idx = Math.floor(Math.random() * elem.length)
        const newOpponentMessage = {
          word: `${elem[idx].word}  ( ${elem[idx].desc} )`,
          from: "opponent"
        }
        const opponentLastChar = (): string => {
          let char = elem[idx].word.slice(-1);
          if(char === "ー") char = elem[idx].word.slice(-2)[0];
          return char;
        }
        printReply(newPlayerMessage, newOpponentMessage, `${opponentLastChar()} から始まる単語を入力`);
      }
    })
    .catch(() => {
      const newOpponentMessage = {
        word: "エラー発生！",
        from: "opponent"
      }
      printReply(newPlayerMessage, newOpponentMessage, "error !");
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
    const newPlayerMessage: Message = {
      word: newWord,
      from: "player"
    }
    // ひらがな チェック
    setMessages([...messages, newPlayerMessage]);
    // const check = () => チェック
    // if( 重複してたら ) {
    //   負け処理
    // } else {
    //   相手の次の返信
    // }
    replyNextWord(newPlayerMessage);
    // 重複チェック
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
