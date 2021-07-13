import { render, screen, cleanup } from '@testing-library/react';
import App from '../components/App';

afterEach(() => {
  cleanup();
});

test('should render calculator', () => {
  render(<App />);
  const appElement = screen.getByTestId('App');
  expect(appElement).toBeInTheDocument();
  const displayElement = screen.getByTestId('display');
  expect(displayElement).toBeInTheDocument();
  const panelElement = screen.getByTestId('button-panel');
  expect(panelElement).toBeInTheDocument();
});
