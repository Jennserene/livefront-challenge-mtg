import { useEffect } from "react"
import Rulings from "../components/rulings"
import { MtgCard } from "../types/card"
import ListItem from "../components/listItem"

interface DetailsProps {
  card: MtgCard
}

const Details = (props: DetailsProps) => {
  const { card } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const attributes = {
    "Mana Cost": card.manaCost,
    "Converted Mana Cost": card.cmc,
    "Colors": card.colors.join(", "),
    "Color Identity": card.colorIdentity.join(", "),
    "Type": card.type,
    "Rarity": card.rarity,
    "Set": card.set,
    "Text": card.text,
    "Artist": card.artist,
    "Number": card.number,
    "Power": card.power,
    "Toughness": card.toughness,
    "Layout": card.layout,
    "Multiverse ID": card.multiverseid,
  }

  const renderAttributes = () => {
    return Object.entries(attributes).map(([label, value]) => {
      if (!value) return null
      return <ListItem key={label} label={label} value={value} />
    })
  }

  return (
    <div className="detailsScreen">
      <section>
        <img className="card-image" src={card.imageUrl} alt={card.name} />
        <div className="detailsText">
          <h2>{card.name}</h2>
          <h3>Card Attributes:</h3>
          <ul>
            {renderAttributes()}
          </ul>
        </div>
      </section>
      {card.rulings && <Rulings rulings={card.rulings} />}
    </div>
  )
}

export default Details
