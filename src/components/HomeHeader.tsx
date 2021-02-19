import { ToggleMenuButton } from './index';

type Props = {
  handleMenuToggle: () => void,
  isMenuOpen: boolean,
}

const HomeHeader = (props: Props) => {
  return (
    <header className="bg-white box-border flex justify-between h-1/10 items-center px-4 rounded-b-xl sticky shadow z-10">
    <div className="flex items-end">
      <h1 className="text-gray-700 text-2xl">
        Word Chain Talker
      </h1>
      <p className="flex-end ml-3 text-gray-500 text-md">
        ver1.0
      </p>
    </div>
    <ToggleMenuButton handleMenuToggle={props.handleMenuToggle} isMenuOpen={props.isMenuOpen} />
    </header>
  )
}

export default HomeHeader;