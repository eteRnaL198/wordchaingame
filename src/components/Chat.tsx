import React from 'react';
import '../assets/styles/Chat.css';

type Props = {
  className?: string;
  message: {
    word: string;
    whose: string;
  }
};

const Chat = (props: Props) => {
  return (
    <div className="chat_wrapper" id="js_chat_wrapper">
      <div className={`chat_balloon ${props.message.whose}`}>{props.message.word}</div>
    </div>
  )
}

export default Chat;