import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dragon mtg cards header', () => {
  render(<App />);
  const textElement = screen.getByText(/dragon mtg cards/i);
  expect(textElement).toBeInTheDocument();
});
