import React, { Component } from "react";
import "./App.css";
import {Quizzes} from "../Quizzes/Quizzes.js";
import * as actions from "../../actions";
import Input from "../Input/Input.js";

class App extends Component {
  componentDidMount() {
    fetch("/quizzes").then(resp => resp.json()).then(quizzes => {
      this.props.quizzesLoaded(quizzes);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <Quizzes quizzesLoaded={actions.quizzesLoaded} quizzes={this.props.quizzes} />
        <Input title='questionTitle' />
        <Input title='answerTitle'/>
        <Input title='answerScore'/>
      </div>
    );
  }
}

export default App;
