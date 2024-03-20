import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { mockCards } from './__mocks__/mockCards'
import './__mocks__/mockLocalStorage'

jest.mock('./api/cardsApi', () => ({
  getCards: jest.fn(),
}))

window.scrollTo = jest.fn()

describe('App', () => {
  beforeEach(() => {
    localStorage.setItem('cards', JSON.stringify(mockCards))
    render(<App />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the header component', () => {
    const header = screen.getByRole('heading', { name: /Magic: The Gathering Dragons/i })
    expect(header).toBeInTheDocument()
  })

  it('renders the home screen by default', () => {
    const cardList = screen.getByRole('list')
    expect(cardList).toBeInTheDocument()
    
    const cards = screen.getAllByRole('listitem')
    expect(cards.length).toBe(mockCards.length)
  })

  it('renders the details screen when a card is selected', () => {
    const cards = screen.getAllByRole('listitem')
    fireEvent.click(cards[0])
    const detailsScreenElement = screen.getByText(mockCards[0].name)
    expect(detailsScreenElement).toBeInTheDocument()
  })

  it('renders the home screen when goHome function is called', () => {
    const thereIsNoHomeButton = screen.queryByAltText('Home button')
    expect(thereIsNoHomeButton).toBeNull()

    const cards = screen.getAllByRole('listitem')
    fireEvent.click(cards[0])
    const homeButton = screen.getByAltText('Home button')
    fireEvent.click(homeButton)

    const cardsAgain = screen.getAllByRole('listitem')
    expect(cardsAgain.length).toBe(mockCards.length)
  })
})