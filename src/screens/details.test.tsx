import { render, screen } from '@testing-library/react'
import Details from './details'
import { mockCards } from '../__mocks__/mockCards'

const mockCard = mockCards[1]
window.scrollTo = jest.fn()

describe('Details', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders the card details correctly', () => {
    render(<Details card={mockCard} />)
    
    expect(screen.getByText('Card Attributes:')).toBeInTheDocument()
    expect(screen.getByText(mockCard.name)).toBeInTheDocument()
    expect(screen.getByAltText(mockCard.name)).toHaveAttribute('src', mockCard.imageUrl)
  })
})