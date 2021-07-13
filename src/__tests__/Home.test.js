import { render, screen, cleanup } from '@testing-library/react';
import Home from '../components/Home';

afterEach(() => {
  cleanup();
});

test('should render calculator', () => {
  render(<Home />);
  const homeElement = screen.getByTestId('home');
  expect(homeElement).toBeInTheDocument();
});
