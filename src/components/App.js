import { useState, useEffect } from 'react';
import Calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => {
  const [total, setTotal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [next, setNext] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = (buttonName) => {
    const data = { total, operation, next };
    const result = Calculate(data, buttonName);

    setTotal(result.total);
    setOperation(result.operation);
    setNext(result.next);
  };

  useEffect(() => {
    if (operation === null) {
      setResult(total);
    } else if (operation === '+/-') {
      if (next === null || next === '0') {
        setResult(total);
      } else {
        setResult(next);
      }
    } else if (operation === '%') {
      setResult(total * 100 + operation);
    } else if (operation !== '%') {
      setResult(next ? total + operation + next : total + operation);
    } else {
      setResult(next === null ? operation : next);
    }
  });

  return (
    <>
      <header>
        <h1>
          Calculator App built using React
        </h1>
        <p>
          Built by Ryel Banfield
        </p>
      </header>
      <div className="calculator">
        <Display result={result} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </>
  );
};

export default App;
