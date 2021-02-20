import { useCallback } from "react";

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
  const concealStr = useCallback(
    () => {
      const name = props.user.username;
      return name.replace(/./g, (match, offset) => {
        if (offset === 0) return match;
        else if (offset === 1) return match;
        else if (offset === name.length - 1) return match;
        else return "*";
      });
    },[]
  );

  const name = (props.myData.username !== props.user.username) ? concealStr() : props.myData.username;

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