import React, {Component} from 'react';
import Button from './Button.js';

let flag = 0;
let numArray = [
  {
    index: 1,
    text: "one"
  },
  {
    index: 2,
    text: "two"
  },
  {
    index: 3,
    text: "three"
  },
  {
    index: 4,
    text: "four"
  },
  {
    index: 5,
    text: "five"
  },
  {
    index: 6,
    text: "six"
  },
  {
    index: 7,
    text: "seven"
  },
  {
    index: 8,
    text: "eight"
  },
  {
    index: 9,
    text: "nine"
  }
]

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      typedDec : false,
      action: 0
    }
    this.passNum = this.passNum.bind(this);
    this.decimal = this.decimal.bind(this);
    this.action = this.action.bind(this);
    this.equals = this.equals.bind(this);
    this.clear = this.clear.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  display(x) {
    this.props.display(x);
    flag = 0;
  }

  clear(x) {
    this.setState({
        a: 0,
        b: 0,
        typedDec : false,
        action: 0
    });
    this.display(0);
  }

  passNum(x) {
    let oldVal = this.state.b;
    if (oldVal !== 0){
      this.setState({
        b: oldVal.toString().concat(x.toString()),
      });
    } else {
      this.setState({
        b: x
      });
    }
    flag = 1;
  }

  decimal(x) {
    if (this.state.typedDec) {
      // pass
    } else {
      this.passNum('.');
      this.setState({
        typedDec: true
      })
    }
  }

  action(x) {
    if (this.state.a === 0) {
      this.setState({
        a: parseFloat(this.state.b),
        b: 0,
        typedDec: false,
        action: x
      });
    } else {
      this.setState({
        action: x
      });
    }
  }

  equals(x) {
    let a = parseFloat(this.state.a);
    let b = parseFloat(this.state.b);
    if (this.state.action) {
      let result = 0;
      switch (this.state.action) {
        case('+'):
          result = a + b;
          break;
        case('-'):
          result = a - b;
          break;
        case('x'):
          result = a * b;
          break;
        case('/'):
          result = a/b;
          break;
        default:
          //pass
          break;
      }
      this.setState({
        a: 0,
        b: result,
        action: 0
      });
      if (parseInt(result) === (parseFloat(result))) {
        this.setState({ typedDec : false });
      } else {
        this.setState({ typedDec : true });
      }
      this.display(result);
    } else {
      //pass
    }
  }

  handleKeyPress(e) {
    if ((e.key < 10) & (e.key > -1)) {
      this.passNum(e.key);
      this.display(this.state.b);
    }
    if (e.key === 'Enter') {
      this.equals(e.key);
    }
    if (e.key === '.') {
      this.decimal(e.key);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentDidUpdate() {
    if (flag !== 0){
      this.display(this.state.b);
    }
  }

  render() {
    return(
      <div id="calculator">
        <div id="num">
          {numArray.map((item) => {
            return <Button className="numbers" id={item.text} btn={item.index} pass={this.passNum} />
          })}
        </div>
        <div id="row2">
          <Button className="secondary" id="clear" btn="C" pass={this.clear} />
          <Button className="secondary" btn="=" pass={this.equals} />
          <Button className="primary" id="add" btn="+" pass={this.action} />
          <Button className="primary" id="subtract" btn="-" pass={this.action} />
          <Button className="primary" id="multiply" btn="x" pass={this.action} />
          <Button className="primary" id="divide" btn="/" pass={this.action} />
          <Button className="numbers" id="zero" btn="0" pass={this.passNum} />
          <Button className="numbers" id="decimal" btn="." pass={this.decimal} />
        </div>
      </div>
    );
  }
}

export default Calculator;
