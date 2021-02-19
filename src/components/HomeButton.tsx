type Props = {
  handleMenuToggle: () => void
  handleMainScreenChange: (screen: string) => void
}

// TODO アイコンstorageから取ってくる

const HomeButton = (props: Props) => {
  return (
    <button
      onClick={()=>{props.handleMainScreenChange("Home"); props.handleMenuToggle()}}
      className="bg-gray-300 flex font-bold items-center justify-center mx-auto py-1 rounded-full text-gray-700 w-3/5"
      >
      <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2" >
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
      Home
    </button>
  )
}

export default HomeButton;