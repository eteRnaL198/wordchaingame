type Props = {
  rank: number,
  user: UserData,
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
  // const name = props.username.
  //TODO 名前モザイク replace 正規表現
  return (
    <div key={props.rank} className="flex justify-between">
      <p>{`${props.rank+1}.`}</p>
      <p>{`${props.user.username}`}</p>
      <p>{`score: ${props.user.record.score}`}</p>
    </div>
  )
}

export default RankRow;