type Props = {
  mainScreen: string,
  onMenuOpenChange: () => void
}

const Home = (props: Props) => {

  return (
    (props.mainScreen !== "Home") ? null:
    <>
      <header className="border-b-2 border-gray-200 flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-gray-700 text-2xl ">
        Word Chain Talker  ver1.0
        {/* TODO タイトル決める */}
        <button onClick={() => props.onMenuOpenChange()}>Menu</button>
      </header>
      {/*
        <Home />
        <Informations />
        <Friends />
      */}
    </>
  )

}

export default Home;