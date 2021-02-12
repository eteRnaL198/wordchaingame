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
    <div className={`chat_wrapper ${props.message.from}`}>
      <span className="chat_icon">{(props.message.from === "player") ? props.playerName : "太郎"}</span>
      <div className={`chat_balloon`}>{props.message.text}</div>
    </div>
  )
}

export default Chat;
