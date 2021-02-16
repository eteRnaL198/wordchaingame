type Props = {
  userData: UserData,
}

type UserData = {
  username: string,
  record: {
    wins: number,
    shortest: number,
    longest: number,
    losses: number,
  },
}

const Profile = (props: Props) => {
  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
        Profile
      </p>
      <p className="flex mx-auto tracking-wide text-2xl text-gray-600 w-4/5">
        username: {props.userData.username}
        {/* 会話をした回数 */}
        {/* 最短の回数 */}
        {/* 最高続いた回数 */}
      </p>
    </section>
  )
}

export default Profile;