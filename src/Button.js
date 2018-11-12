import React, {Component} from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e){
    this.props.pass(e.target.id);
  }
  render() {
    return (
      <div id={this.props.btn} onClick={this.clickHandler} className={"button" + " " + this.props.className}>
        {this.props.btn}
      </div>
    )
  }
}

export default Button;
