import Big from 'big.js';

let result = Infinity;

const operate = (numberOne = null, operation, numberTwo = null) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  const operations = ['+', '-', 'X', '/', '%'];

  if (operations.includes(operation)) {
    if (operation === '+') {
      result = numOne.plus(numTwo);
    }

    if (operation === '-') {
      result = numOne.minus(numTwo);
    }

    if (operation === 'X') {
      result = numOne.times(numTwo);
    }

    if (operation === '/') {
      try {
        result = numOne.div(numTwo);
      } catch (error) {
        return 'Infinity';
      }
    }

    if (operation === '%') {
      if (numOne) {
        result = numOne.div(100);
      } else {
        result = numOne.div(100);
      }
    }
  }

  return result.toString();
};

export default operate;
