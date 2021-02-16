type Props = {
  handleMenuToggle: () => void,
  isMenuOpen: boolean,
}

const ToggleMenuButton = (props: Props) => {
  return (
    <button onClick={props.handleMenuToggle}>
      <svg width="24" height="24" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path className={`duration-300 ${(props.isMenuOpen)? "origin-top-left rotate-45 transform translate-x-2 translate-y-1/10" : ""}`} d="M3 3H43" stroke="black" strokeWidth="4.68085" strokeLinecap="round"/>
          <path className={`duration-300 ${(props.isMenuOpen)? "opacity-0": ""}`} d="M3 23H43" stroke="black" strokeWidth="4.68085" strokeLinecap="round"/>
          <path className={`duration-300 ${(props.isMenuOpen)? "origin-bottom-left -rotate-45 transform translate-x-2 -translate-y-1/10": ""}`} d="M3 43H43" stroke="black" strokeWidth="4.68085" strokeLinecap="round"/>
        </g>
      </svg>
    </button>
  )
}

export default ToggleMenuButton