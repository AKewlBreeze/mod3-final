import React, { Component } from "react";
import { Answers } from '../Answers/Answers.js';


class Input extends Component {
  constructor(){
    super()
    this.state = {
      input : ''

  }
}

// 3 inputs in our form
// one represents questionTitle
// one represents answerTitle
// one represents answerScore


// onChange - grab the value from the input element, and set our state based on that value
// setState
// pass props to App

render(){
  return (
    <div>
    <input
      placeholder={this.props.title}
      name={this.props.title}
      onChange={(e)=>this.setState({input: e.target.value})}/>
    </div>
  );
  }
}
export default Input;
