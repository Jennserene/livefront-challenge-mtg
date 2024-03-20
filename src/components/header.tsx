import backSvg from '../assets/back.svg'

interface HeaderProps {
  goHome: () => void
  notHome: boolean
}

const Header = (props: HeaderProps) => {
  const { goHome, notHome } = props

  const handleClick = (event) => {
    event.preventDefault()
    goHome()
  }

  return (
    <header>
      <div className="backContainer">
        {notHome && <button onClick={handleClick}><img src={backSvg} alt="Home button" /></button>}
      </div>
      <h1>Magic: The Gathering Dragons</h1>
      <div className="headerRight" />
    </header>
  )
}

export default Header
