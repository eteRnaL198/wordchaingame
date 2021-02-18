import OpponentIcon from '../assets/img/opponent.jpg';

type Props = {
  count?: number,
  message: {
    text: string;
    type: string;
    from: string;
  }
};

const Chat = (props: Props) => {
  return (
    (props.message.text === "") ? null :
    <div className={`flex items-end text-sm w-9/10 ${(props.message.from === "player") ? "flex-row-reverse" : ""}`}>
      {(props.message.from === "player") ? null : <img src={OpponentIcon} alt="" className="h-7 mr-2 rounded-full w-7"/>}
      {/* TODO 画像表示方法どうするか */}
      <div className={`px-4 py-2 rounded-xl max-w-7/10 ${(props.message.from === "player") ? "bg-blue-400 rounded-br-none text-white" : "bg-gray-200 rounded-bl-none text-gray-700"}`}>{props.message.text}</div>
      {(typeof props.count === 'undefined') ? null : <p className="mx-2 text-gray-400">{props.count}</p>}
    </div>
  )
}

export default Chat;