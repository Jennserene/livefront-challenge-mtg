import backSvg from '../assets/back.svg'

type HeaderProps = {
  goHome: () => void
}

const Header = (props: HeaderProps) => {
  const { goHome } = props

  const handleClick = () => {
    console.log('click')
    goHome()
  }

  return (
    <header>
      <div className="backContainer">
        <img src={backSvg} onClick={handleClick} alt="Home button"/>
      </div>
      <h1 onClick={handleClick}>
        Dragon MTG Cards
      </h1>
      <div className="headerRight" />
    </header>
  )
}

export default Header
