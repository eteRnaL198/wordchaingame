import React from 'react';
import '../assets/styles/Chat.css';

type Props = {
  className?: string;
  message: {
    text: string;
    whose: string;
  }
};

const Chat = (props: Props) => {
    return (
      <div className="chat_wrapper">
        <div className={`chat_balloon ${props.message.whose}`}>{props.message.text}</div>
      </div>
    )
}

export default Chat;