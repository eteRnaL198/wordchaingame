import OpponentIcon from '../assets/img/opponent.jpg'

type Props = {
  className?: string;
  message: {
    text: string;
    from: string;
  }
};

const Chat = (props: Props) => {

  return (
    (props.message.text === "") ? null :
    <>
    <div className="chat-message" id="js_chat-message">
         <div className={`flex items-end ${(props.message.from === "player") ? "justify-end" : ""}`}>
            <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${(props.message.from === "player") ? "order-1 items-end" : "order-2 items-start"}`}>
               <div><span className={`px-4 py-2 rounded-lg inline-block  ${(props.message.from === "player") ? "bg-blue-400 text-white rounded-br-none" : "bg-gray-300 text-gray-700 rounded-bl-none"}`}>{props.message.text}</span></div>
            </div>
            {/* ↓player は画像なし */}
            <img src={OpponentIcon}
            alt="My profile"
            className={`w-6 h-6 rounded-full ${(props.message.from === "player") ? "order-2" : "order-1"}`} />
         </div>
      </div>
    </>
  )
}

export default Chat;
