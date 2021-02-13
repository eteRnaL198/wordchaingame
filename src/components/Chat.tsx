import '../assets/styles/Chat.css';

type Props = {
  className?: string;
  playerName: string;
  message: {
    text: string;
    from: string;
  }
};

const Chat = (props: Props) => {
  if(props.message.text === "") {
    return null;
  }
  return (
    <>
    <div className="chat-message" id="js_chat-message">
         <div className={`flex items-end ${(props.message.from === "player") ? "justify-end" : ""}`}>
            <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${(props.message.from === "player") ? "order-1 items-end" : "order-2 items-start"}`}>
               <div><span className={`px-4 py-2 rounded-lg inline-block  ${(props.message.from === "player") ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-300 text-gray-600 rounded-bl-none"}`}>{props.message.text}</span></div>
            </div>
            <img src={`https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=1441`}
            alt="My profile"
            className={`w-6 h-6 rounded-full ${(props.message.from === "player") ? "order-2" : "order-1"}`} />
         </div>
      </div>
    </>
  )
}

export default Chat;
