import { Ruling } from "../types/card"
import { formatDate } from "../utils/formatDate"
import ListItem from "./listItem"

interface RulingsProps {
  rulings: Ruling[]
}

const Rulings = (props: RulingsProps) => {
  const { rulings } = props

  const renderRulings = () => {
    if (rulings.length === 0) {
      return <p>No rulings available</p>
    }
    return rulings.map((ruling: Ruling, index: number) => {
      const formattedDate = formatDate(ruling.date)
      return (
        <ListItem key={index} label={formattedDate} value={ruling.text} />
      )
    })
  }

  return (
    <section className="rulingsList">
      <h3>Rulings:</h3>
      <ul>
        {renderRulings()}
      </ul>
    </section>
  )
}

export default Rulings