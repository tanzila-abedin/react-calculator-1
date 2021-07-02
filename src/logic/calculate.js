const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  }

  if (buttonName === '%') {
    next = (0.01 * total);
    operation = '%';
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  
};
