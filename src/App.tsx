import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './screens/home'
import Details from './screens/details'
import { getCards } from './api/cardsApi'
import { MtgCard } from './types/card'

const enum Screen {
  Home = 'home',
  Details = 'details',
}

function App() {
  const [screen, setScreen] = useState<Screen>(Screen.Home)
  const [cards, setCards] = useState<MtgCard[]>([])
  const [selectedCard, setSelectedCard] = useState<MtgCard>(cards[0])

  useEffect(() => {
    const retrieveCards = async () => {
      if (cards.length > 0) return

      const localCards = localStorage.getItem('cards')
      if (localCards) setCards(JSON.parse(localCards))

      if (!localCards) {
        const fetchedCards = await getCards()
        localStorage.setItem('cards', JSON.stringify(fetchedCards))
        setCards(fetchedCards)
      }
    }
    retrieveCards()
  }, [cards.length])

  const displayCardDetails = (card: MtgCard) => {
    setSelectedCard(card)
    setScreen(Screen.Details)
  }

  return (
    <div className="app">
      <Header goHome={() => setScreen(Screen.Home)} notHome={screen !== Screen.Home} />
      <main>
        {screen === Screen.Home && (
          <Home cards={cards} choose={displayCardDetails} />)}
        {screen === Screen.Details && (
          <Details card={selectedCard} />)}
      </main>
    </div>
  )
}

export default App
