import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = '2022-01-01'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('1/1/2022')
  })

  it('should handle leading zeros in the month and day', () => {
    const date = '2022-02-03'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2/3/2022')
  })

  it('should handle single-digit month and day', () => {
    const date = '2022-12-05'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('12/5/2022')
  })
})