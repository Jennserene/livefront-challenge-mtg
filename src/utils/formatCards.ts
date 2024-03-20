import { MtgCard } from "../types/card"

export const formatCards = async (response: Response): Promise<MtgCard[]> => {
  const data = await response.json()
  const rawResults = data.cards.filter((card: any) => !!card.imageUrl)
  const results = rawResults.map((card: any) => {
    return {
      id: card.id,
      name: card.name,
      number: card.number,
      imageUrl: card.imageUrl,
      manaCost: card.manaCost,
      cmc: card.cmc,
      rarity: card.rarity,
      set: card.set,
      text: card.text,
      type: card.type,
      colors: card.colors,
      colorIdentity: card.colorIdentity,
      artist: card.artist,
      power: card.power,
      toughness: card.toughness,
      layout: card.layout,
      multiverseid: card.multiverseid,
      rulings: card.rulings,
    } as MtgCard
  })

  return results
}