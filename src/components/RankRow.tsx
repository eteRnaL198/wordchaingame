type Props = {
  rank: number,
  user: UserData,
  myData: UserData,
}

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    score: number,
    longest: number,
    lose: number,
  },
}

const RankRow = (props: Props) => {
  // const name = (props.myData.username !== props.user.username) ? props.user.username.replace(/(?<=..).(?=.)/gu, "*") : props.myData.username;
  const name = props.user.username;//TODO 正規表現対応
  return (
    <div key={props.rank} className="flex justify-between text-center">
      <p>{`${props.rank+1}.`}</p>
      <span className={`${(props.myData.username !== props.user.username) ? "" : "bg-gray-200 rounded-xl w-1/2"}`} >
        <p>{`${name}`}</p>
      </span>
      <p>{`score: ${props.user.record.score}`}</p>
    </div>
  )
}

export default RankRow;