type Props = {
  userData: UserData,
}

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    longest: number,
    lose: number,
  },
}

const Profile = (props: Props) => {
  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
        Profile
      </p>
      <div className="bg-white flex-col items-center mx-auto px-10 py-6 rounded-xl shadow-md w-4/5">
        <p className="font-bold flex justify-start text-xl text-gray-700">
          {props.userData.username}
        </p>
        <div className="grid grid-cols-2 mx-auto mt-2 tracking-wide text-md text-gray-600">
          <p>win : {props.userData.record.win}</p> 
          <p>shortest : {props.userData.record.shortest}</p>
          <p>lose: {props.userData.record.lose}</p>
          <p>longest : {props.userData.record.longest}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile;