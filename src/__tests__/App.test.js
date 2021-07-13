import { render, screen, cleanup } from '@testing-library/react';
import Calculate from '../logic/calculate';
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

test('should calculate the answer', () => {
  const buttonName = 'AC';
  const data = { total: '5', operation: '+', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe(null);
});

test('should calculate the answer', () => {
  const buttonName = '+/-';
  const data = { total: '5', operation: null, next: null };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('-5');
});

test('should calculate the answer', () => {
  const buttonName = '%';
  const data = { total: '5', operation: null, next: null };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('0.05');
});

test('should calculate the answer', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '+', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('10');
});
