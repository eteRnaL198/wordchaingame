import React, { useEffect, useState } from 'react';
import { Chat, Input } from "./index";
import firebase from "firebase";

type Props = {
  handleMessageAdd: (messages: Message[]) => void
  mainScreen: string,
  messages: Message[],
  onMenuOpenChange: () => void
};

type Message = {
  text: string;
  from: string;
}

const Play = (props: Props) => {
  const [placeholderText, setPlaceholderText] = useState<string>();
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
    // TODO ↑これコールバックにする必要ある？ 直じゃダメなの？
  });

  const printReply = (newMessages: Message[], text: string) => {
    setTimeout(() => {
      props.handleMessageAdd([...props.messages, ...newMessages]);
      setPlaceholderText(text);
    }, 250);
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
    const tempMessages = props.messages.filter(message => message.text === targetMessage.text)
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
    } else if(isDuplicated(newPlayerMessage)) {
      return "duplicated";
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
        // TODO ** の負け！
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
        if(!wordsArr) {
          replyDialog(newPlayerMessage, "win", "noIdea");
        } else {
          const idx = Math.floor(Math.random() * wordsArr.length);
          const newOpponentMessage = {
            text: `${wordsArr[idx].text}  ( ${wordsArr[idx].desc} )`,
            from: "opponent"
          }
          if(isDuplicated(newOpponentMessage)) {
            replyDialog(newPlayerMessage, "win", "noIdea");
          } else {
            const newOpponentLastChar = getLastChar(wordsArr[idx].text);
            setOpponentLastChar(newOpponentLastChar);
            printReply([newPlayerMessage, newOpponentMessage], `Start with 「${newOpponentLastChar}」`);
            return doc;
          };
        }
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

  const handlePlayerWordAdd = (newWord: string) => {
    if(newWord.match(/^[ぁ-ゔ・ー]*$/)) {
      const newPlayerMessage = {
        text: newWord,
        from: "player"
      }
      props.handleMessageAdd([...props.messages, newPlayerMessage]);
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
    (props.mainScreen !== "Play") ? null :
    <div className="h-full">
      <header className="border-b-2 border-gray-200 flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-gray-700 text-2xl ">
        John 
        {/* TODO キャラの名前表示 */}
        <button
          className="absolute right-3"
          onClick={()=>props.onMenuOpenChange()}
        >
          open
        </button>
      </header>
      <div id="messages" className="h-4/5 flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {props.messages.map((message, idx) => (
          <Chat key={idx} message={message} />
        ))}
      </div>
      <Input onPlayerWordAdd={handlePlayerWordAdd} placeholderText={placeholderText} />
    </div>
  );
}

export default Play;