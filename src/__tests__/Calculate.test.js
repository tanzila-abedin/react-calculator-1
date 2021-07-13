import Calculate from '../logic/calculate';

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

test('should calculate the answer', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '-', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('0');
});

test('should calculate the answer', () => {
  const buttonName = '=';
  const data = { total: '5', operation: 'X', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('25');
});

test('should calculate the answer', () => {
  const buttonName = '=';
  const data = { total: '5', operation: '/', next: '5' };
  const result = Calculate(data, buttonName);
  expect(result.total).toBe('1');
});
