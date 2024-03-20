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
        {notHome && <a onClick={handleClick}><img src={backSvg} alt="Home button" /></a>}
      </div>
      <h1>Magic: The Gathering Dragons</h1>
      <div className="headerRight" />
    </header>
  )
}

export default Header
