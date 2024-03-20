import backSvg from '../assets/back.svg'

interface HeaderProps {
  goHome: () => void
  notHome: boolean
}

const Header = (props: HeaderProps) => {
  const { goHome, notHome } = props

  const handleClick = () => {
    goHome()
  }

  return (
    <header>
      <div className="backContainer">
        {notHome && <img src={backSvg} onClick={handleClick} alt="Home button" />}
      </div>
      <h1 onClick={handleClick}>
        Magic: The Gathering Dragons
      </h1>
      <div className="headerRight" />
    </header>
  )
}

export default Header
