import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0
    }
    this.display = this.display.bind(this);
  }
  display(x) {
    this.setState({
      display: x
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> CALCULATOR </h1>
          <hr className="hr" />
          <div id="display">{this.state.display}</div>
          <Calculator display={this.display} />
        </header>
      </div>
    );
  }
}

export default App;
