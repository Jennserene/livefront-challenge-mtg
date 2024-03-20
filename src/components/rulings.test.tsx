import { render, screen } from '@testing-library/react'
import Rulings from './rulings'
import { formatDate } from '../utils/formatDate'

const mockRulings = [
  { date: '2022-01-01', text: 'Ruling 1' },
  { date: '2022-01-02', text: 'Ruling 2' },
]

describe('Rulings', () => {
  it('renders "No rulings available" when rulings array is empty', () => {
    render(<Rulings rulings={[]} />)
    const noRulingsElement = screen.getByText('No rulings available')
    expect(noRulingsElement).toBeInTheDocument()
  })

  it('renders the list of rulings when rulings array is not empty', () => {
    render(<Rulings rulings={mockRulings} />)
    const rulingsListElement = screen.getByRole('list')
    expect(rulingsListElement).toBeInTheDocument()

    const rulingItems = screen.getAllByRole('listitem')
    expect(rulingItems.length).toBe(mockRulings.length)

    mockRulings.forEach((ruling, index) => {
      const formattedDate = formatDate(ruling.date)
      const rulingItem = screen.getByText(formattedDate)
      expect(rulingItem).toBeInTheDocument()

      const rulingText = screen.getByText(ruling.text)
      expect(rulingText).toBeInTheDocument()
    })
  })
})