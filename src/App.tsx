import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './screens/home'
import Details from './screens/details'

const enum Screen {
  Home = 'home',
  Details = 'details',
}

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.Home)
  const [cards, setCards] = useState([])

  return (
    <div className="app">
      <Header goHome={() => setScreen(Screen.Home)} />
      <main>
        {screen === Screen.Home && (<Home />)}
        {screen === Screen.Details && (<Details />)}
      </main>
    </div>
  )
}

export default App
