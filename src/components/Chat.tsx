import React from 'react';

type Props = {
    text: string;
    who: string;
    id: number;
}

const Chat: React.FC<> = (props: Props) => {
    return (
        {props.map((message) => (
            <div className="box" key={message.id}>
              {message.text}
            </div>
          ))}    
    )
}

export default Chat;