export type Ruling = {
  date: string
  text: string
}

export type MtgCard = {
  name: string
  manaCost: string
  cmc: number
  colors: string[]
  colorIdentity: string[]
  type: string
  rarity: string
  set: string
  text: string
  artist: string
  number: string
  power?: string
  toughness?: string
  layout: string
  multiverseid: number
  imageUrl: string
  rulings?: Ruling[]
  id: string
}