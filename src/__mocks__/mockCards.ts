import { MtgCard } from "../types/card"

export const mockCards: MtgCard[] = [
  {
    name: 'Mock Card 1',
    manaCost: '1',
    cmc: 1,
    colors: ['white'],
    colorIdentity: ['white'],
    type: 'instance',
    rarity: 'Rare',
    set: 'Mock Set 1',
    text: 'Mock Text 1',
    artist: 'Mock Artist 1',
    number: 'Mock',
    layout: 'Mock',
    multiverseid: 1,
    imageUrl: 'Mock url 1',
    id: 'Mock id 1',
  },
  {
    name: 'Mock Card 2',
    manaCost: '2',
    cmc: 2,
    colors: ['blue'],
    colorIdentity: ['blue'],
    type: 'creature - Dragon',
    rarity: 'Common',
    set: 'Legion',
    text: 'Mock Text 2',
    artist: 'Mock Artist 2',
    number: 'Mock',
    power: '2',
    toughness: '1',
    layout: 'Mock',
    multiverseid: 2,
    imageUrl: 'Mock url 2',
    id: 'Mock id 2',
  }
]

export const mockCardResponse: Response = {
  json: async () => ({ cards: mockCards })
} as Response