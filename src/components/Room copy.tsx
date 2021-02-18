import React, { useEffect, useState } from 'react';
import { Chat, Input, ToggleMenuButton } from "./index";
import firebase from "firebase";

type Props = {
  handleUserData: (newData: UserData) => void,
  handleMenuToggle: () => void,
  isMenuOpen: boolean,
  mainScreen: string,
  roomName: string,
  userData: UserData,
};

type Message = {
  text: string;
  type: string;
  from: string;
}

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    lose: number,
    longest: number,
  },
}

const Room = (props: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [opponentLastChar, setOpponentLastChar] = useState<string>("");
  const [placeholderText, setPlaceholderText] = useState<string>();

  let count: number = 0;

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
    const emptyMessage: Message = {
      text: "",
      type: "empty",
      from: "player"
    }
    replyDialog(emptyMessage, "start", "first");
    setOpponentLastChar("め");
  }, [])

  useEffect(() => {
    scrollBottom();
  });

  const printReply = (newMessages: Message[], text: string) => {
    setTimeout(() => {
      setMessages([...messages, ...newMessages]);
      setPlaceholderText(text);
    }, 250);
  }

  const updateData = (key: keyof typeof props.userData.record, newValue: number) => {
    const newData = props.userData;
    newData.record[key] = newValue;
    props.handleUserData(newData);
  }

  const getLastChar = (word: string): string => {
    const regex = /[^ぁぃぅぇぉっゃゅょゎ・ー][あ-ゔ]*$/;
    let idx = word.length - 1;
    while(!regex.test(word[idx])) {
      idx--;
    }
    return word[idx];
  }

  const isDuplicated = (targetMessage: Message): boolean => {
    const sameMessages = messages.filter(message => message.text === targetMessage.text)
    if(sameMessages.length > 0) {
      return true
    } else {
      return false
    }
  }

  const isLargerThanCurrent = (key: keyof typeof props.userData.record, targetNum: number): boolean => {
    const currentValue = props.userData.record[key];
    if(targetNum > currentValue) {
      return true;
    } else {
      return false;
    }
  }

  const judgePlayerMessage = (newPlayerMessage: Message): string => {
    if (newPlayerMessage.text === "もういちど") {
      return "reset";
    } else if(newPlayerMessage.text.slice(-1) === 'ん') {
      return "endWithN"
    } else if(newPlayerMessage.text.slice(0)[0] !== opponentLastChar ) {
      return "wrongStart";
    } else if(isDuplicated(newPlayerMessage)) {
      return "duplicated";
    } else {
      return "continue";
    }
  }

  const replyConnectError = (newPlayerMessage?: Message) => {
    const newOpponentMessage = {
      text: "エラー発生！",
      type: "error",
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
      } else {
        printReply([newPlayerMessage, field.message], field.placeholderText);
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
        const newOpponentMessage: Message = {
          text: `${wordsArr[idx].text}  ( ${wordsArr[idx].desc} )`,
          type: "word",
          from: "opponent",
        }
        if(isDuplicated(newOpponentMessage)) {
          finishGame(newPlayerMessage, "win", "noIdea");
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
    const messages = document.getElementById("messages");
    if(messages) {
      const lastBalloon = messages.lastElementChild;
      if(lastBalloon) lastBalloon.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  const finishGame = (newPlayerMessage: Message, result: string, reason: string) => {
    replyDialog(newPlayerMessage, result, reason);
    const key = result as keyof typeof props.userData.record;
    const currentValue = props.userData.record[key];
    updateData(key, currentValue+1);
    if(isLargerThanCurrent("longest", count+1)) {
      updateData("longest", count+1);
    } if(result === "win" && !isLargerThanCurrent("shortest", count+1)) {
      updateData("shortest", count+1);
      console.log("shortest win");
    }
  }

  const handlePlayerWordAdd = (newWord: string) => {
    if(newWord.match(/^[ぁ-ゔ・ー]*$/) && newWord !== "") {
      const newPlayerMessage: Message = {
        text: newWord,
        type: "word",
        from: "player",
      }
      setMessages([...messages, newPlayerMessage]);
      const operation = judgePlayerMessage(newPlayerMessage);
      if(operation === "continue") {
        replyNextMessage(newPlayerMessage);
      } else if(operation === "reset") {
        newPlayerMessage.type = "reset";
        setMessages([newPlayerMessage]);
        // replyDialog(newPlayerMessage, "start", "first");
        // setOpponentLastChar("め");
      } else {
        finishGame(newPlayerMessage, "lose", operation);
      }
    } else {
      const emptyMessage: Message = {
        text: "",
        type: "empty",
        from: "player",
      }
      replyDialog(emptyMessage, "err", "kanaErr");
    }
  }

  return (
    (props.mainScreen !== props.roomName) ? null :
    <div className="h-screen">
      <header className="border-b-2 border-gray-200 flex justify-between items-center h-1/10 px-4 sticky text-gray-700 text-4xl">
        {props.roomName}
        <ToggleMenuButton handleMenuToggle={props.handleMenuToggle} isMenuOpen={props.isMenuOpen} />
      </header>
      <div id="messages" className="h-4/5 flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {messages.map((message, idx) => {
          if(message.type === "word") {
            count+=1;
            return <Chat key={idx} count={count} message={message}/>
          } else {
            return <Chat key={idx} message={message}/>
          }
        })}
      </div>
      <Input onPlayerWordAdd={handlePlayerWordAdd} placeholderText={placeholderText} />
    </div>
  );
}

export default Room;