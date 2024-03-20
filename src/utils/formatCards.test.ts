import { formatCards } from './formatCards'
import { mockCardResponse, mockCards } from '../__mocks__/mockCards'

describe('formatCards', () => {
  it('should format the cards correctly', async () => {
    const cards = await formatCards(mockCardResponse)

    expect(cards).toEqual(mockCards)
  })
})