import React, { useEffect } from 'react';
import '../assets/styles/Chat.css';

type Props = {
  className?: string;
  message: {
    word: string;
    from: string;
  }
};

const Chat = (props: Props) => {
  return (
    <div className="chat_wrapper">
      <div className={`chat_balloon ${props.message.whose}`}>{props.message.word}</div>
    </div>
  )
}

export default Chat;