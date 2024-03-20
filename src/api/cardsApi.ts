import { MtgCard } from "../types/card"
import { formatCards } from "../utils/formatCards"

const api = 'https://api.magicthegathering.io/v1/cards'

export const getCards = async (): Promise<MtgCard[]> => {
  const dragonsFilter = {
    subtypes: 'Dragon',
  }
  const requestString = Object.entries(dragonsFilter)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  
  const data = await fetch(`${api}?${requestString}`)
  return await formatCards(data)
}