import { MtgCard } from "../types/card"

interface HomeProps {
  cards: MtgCard[]
  choose: (card: MtgCard) => void
}

const Home = (props: HomeProps) => {
  const { cards, choose } = props

  const renderCards = () => {
    return cards.map((card: any, index: number) => {
      return (
        <li key={index} onClick={() => choose(card)}>
          <h3>{card.name}</h3>
          <div>
            <img src={card.imageUrl} alt={card.name} />
          </div>
        </li>
      )
    })
  }

  return (
    <ul className="cards">
      {renderCards()}
    </ul>
  )
}

export default Home