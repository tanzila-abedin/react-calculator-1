import Operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operations = ['+', 'X', '-', '/'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }

  if (buttonName === '%') {
    total = (0.01 * total).toString();
    operation = '%';
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = Operate(total, operation, next);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
  } else if ((operation && digits.includes(buttonName)) || (operation && buttonName === '.')) {
    next = next ? next + buttonName : buttonName;
  } else if (digits.includes(buttonName) || buttonName === '.') {
    total = total ? total + buttonName : buttonName;
  }
  return { total, next, operation };
};

export default calculate;
