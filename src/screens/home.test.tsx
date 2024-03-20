import { render, screen } from '@testing-library/react'
import Home from './home'
import { mockCards } from '../__mocks__/mockCards'

const mockChoose = jest.fn()

describe('Home', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the list of cards', () => {
    render(<Home choose={mockChoose} cards={mockCards} />)
    const cardElements = screen.getAllByRole('listitem')
    expect(cardElements.length).toBe(mockCards.length)
  })

  it('calls the choose function when a card is clicked', () => {
    render(<Home cards={mockCards} choose={mockChoose} />)
    const cardElement = screen.getByText(mockCards[0].name)
    cardElement.click()
    expect(mockChoose).toHaveBeenCalledWith(mockCards[0])
  })
})