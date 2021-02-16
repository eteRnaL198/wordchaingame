import OpponentIcon from '../assets/img/opponent.jpg';

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
    <div className={`flex text-sm w-9/10 ${(props.message.from === "player") ? "justify-end" : "items-end"}`}>
      {(props.message.from === "player") ? null : <img src={OpponentIcon} alt="" className="w-7 h-7 rounded-full"/>}
      <div className={`px-4 py-2 rounded-xl max-w-4/5 ${(props.message.from === "player") ? "bg-blue-400 rounded-br-none text-white" : "bg-gray-200 rounded-bl-none text-gray-700"}`}>{props.message.text}</div>
    </div>
  )
}

export default Chat;
