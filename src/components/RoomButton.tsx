type Props = {
  friend: Friend
  handleMenuToggle: () => void
  handleMainScreenChange: (screen: string) => void
}

type Friend = {
  name: string,
  img: string,
  comment: string,
  level: number,
}

const RoomButton = (props: Props) => {
  return (
    <button
      onClick={()=>{
        props.handleMainScreenChange(props.friend.name);
        props.handleMenuToggle();
      }}
      className="bg-white border flex h-16 items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5"
    >
      <img className="flex items-center rounded-full space-x-4 w-12" src={props.friend.img} alt=""/>
      <div className="flex flex-col items-start ml-3">
        <p className="font-semibold text-lg text-gray-700">
          {props.friend.name}
        </p>
        <p className="text-sm text-gray-500">
          {props.friend.comment}
        </p>
      </div>
    </button>
  )
}

export default RoomButton;