import React from 'react';
import Calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, operation, next } = this.state;
    const data = { total, operation, next };
    const result = Calculate(data, buttonName);

    this.setState({
      total: result.total,
      operation: result.operation,
      next: result.next,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;

    if (operation === null) {
      result = total;
    } else if (operation === '+/-') {
      if (next === null || next === '0') {
        result = total;
      } else {
        result = next;
      }
    } else if (operation === '%') {
      result = total * 100 + operation;
    } else if (operation === 'X') {
      result = next ? total + operation + next : total + operation;
    } else {
      result = next === null ? operation : next;
    }

    return (
      <>
        <header className="App-header">
          Calculator built using React
        </header>
        <Display result={result} />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}
