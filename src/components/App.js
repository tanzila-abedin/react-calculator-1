import React from 'react';
import Calculate from '../logic/calculate';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    const result = Calculate(data, buttonName);

    this.setState({
      total: result.total,
      operation: result.operation,
      next: result.next,
    });
  }

  render() {
    return (
      <>
        <header className="App-header">
          Calculator built using React
        </header>
        <Display />
        <ButtonPanel handleClick={this.handleClick} />
      </>
    );
  }
}
