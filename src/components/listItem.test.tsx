import { render, screen } from '@testing-library/react'
import ListItem from './listItem'

describe('ListItem', () => {
  const testLabel = 'Test Label'
  const testValue = 'Test Value'

  it('renders the label and string value', () => {
    render(<ListItem label={testLabel} value={testValue} />)
    const label = screen.getByText(testLabel)
    const value = screen.getByText(testValue)
    expect(label).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })

  it('renders the label and numerical value', () => {
    render(<ListItem label={testLabel} value={123} />)
    const label = screen.getByText(testLabel)
    const value = screen.getByText('123')
    expect(label).toBeInTheDocument()
    expect(value).toBeInTheDocument()
  })
})