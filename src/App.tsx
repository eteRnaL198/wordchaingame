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
  // const [playerMessage, setPlayerMessage] = useState<Message>();

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
    // TODO 最初のplayerMessageをなんとかする
    // replyDialog(newPlayerMessage, "start", "first");
    // replyDialog(newPlayerMessage, "start", "registration");
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
    if(char === "ー") char = word.slice(-2)[0];
    // TODO 小さい文字も
    return char;
  }

  const isRepeated = (targetMessage: Message): boolean => {
    const tempMessages = messages.filter(message => message.text === targetMessage.text)
    if(tempMessages.length) {
      return true
    } else {
      return false
    }
  }

  const judgePlayerMessage = (newPlayerMessage: Message): boolean => {
    // TODO is** の方がいいかも？ チャー とかにも注意
    const getNewOpponentMessage = (newText: string): Message => ({
        text: newText,
        from: "opponent"
    })
    if(newPlayerMessage.text.slice(-1) === 'ん') {
      // TODO replyDialog を使う
      printReply([newPlayerMessage, getNewOpponentMessage("ん で終わってるよ 君の負け！")], "Thank you for playing !!");
      return false;
    } else if(placeholderText && newPlayerMessage.text.slice(0)[0] !== placeholderText.slice(-2)[0]) {
      printReply([newPlayerMessage, getNewOpponentMessage(`で始まってないよ 君の負け！`)], "Thank you for playing !!");
      return false;
    } else if(isRepeated(newPlayerMessage)) {
      printReply([newPlayerMessage, getNewOpponentMessage(`既に言ったよ 君の負け！`)], "Thank you for playing !!");
      return false;
    } else {
      return true;
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
    // 自分のメッセージ残るように
    const db = firebase.firestore();
    const dialogsDoc = db.collection("dialogs").doc(docName);
    await dialogsDoc.get().then( async (doc) => {
      const field = await doc.get(fieldName);
      printReply([newPlayerMessage, field.message], field.placeholderText);
    })
    .catch(() => replyConnectError());
  }

  const replyNextWord = async (newPlayerMessage: Message) => {
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
        const opponentLastChar = getLastChar(wordsArr[idx].text);
        // ひらがな以外入力後 尻を保つように
        printReply([newPlayerMessage, newOpponentMessage], `Start with 「${opponentLastChar}」`);
      }
    })
    .catch(() => replyConnectError(newPlayerMessage))

    return null;
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
      const newPlayerMessage: Message = {
        text: newWord,
        from: "player"
      }
      setMessages([...messages, newPlayerMessage]);
      // setPlayerMessage(newPlayerMessage);
      if(judgePlayerMessage(newPlayerMessage)) {
        replyNextWord(newPlayerMessage);
      }
    } else {
      // TODO replyDialog にする
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
      <Input onPlayerWordAdd={handlePlayerWordAdd} placeholderText={placeholderText} />
    </div>
  );
}

export default App;