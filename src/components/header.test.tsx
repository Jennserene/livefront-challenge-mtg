import { render, screen, fireEvent } from '@testing-library/react'
import Header from './header'

const title = /Magic: The Gathering Dragons/i

describe('Header', () => {
  it('renders the header component', () => {
    render(<Header goHome={() => { }} notHome={true} />)
    const headerElement = screen.getByRole('heading', { name: title })
    expect(headerElement).toBeInTheDocument()
  })

  it('renders the back button when notHome is true', () => {
    render(<Header goHome={() => { }} notHome={true} />)
    const backButtonElement = screen.getByAltText('Home button')
    expect(backButtonElement).toBeInTheDocument()
  })

  it('does not render the back button when notHome is false', () => {
    render(<Header goHome={() => { }} notHome={false} />)
    const backButtonElement = screen.queryByAltText('Home button')
    expect(backButtonElement).toBeNull()
  })

  it('calls goHome function when header is clicked', () => {
    const goHomeMock = jest.fn()
    render(<Header goHome={goHomeMock} notHome={true} />)
    const headerElement = screen.getByRole('heading', { name: title })
    fireEvent.click(headerElement)
    expect(goHomeMock).toHaveBeenCalledTimes(1)
  })

  it('calls goHome function when back button is clicked', () => {
    const goHomeMock = jest.fn()
    render(<Header goHome={goHomeMock} notHome={true} />)
    const backButtonElement = screen.getByAltText('Home button')
    fireEvent.click(backButtonElement)
    expect(goHomeMock).toHaveBeenCalledTimes(1)
  })
})