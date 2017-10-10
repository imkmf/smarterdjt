import React, { Component } from 'react';
import Intro from './Intro';
import Question from './Question';
import Outro from './Outro';

import questions from './questions';
import iq from './iq';

const initialState = {
  answers: {},
  currentQuestion: 0
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
    this.nextQuestion = this.nextQuestion.bind(this)
    this.startOver = this.startOver.bind(this)
  }

  componentDidMount() {
    const cachedState = localStorage.getItem('state');
    if (cachedState) {
      this.setState(JSON.parse(cachedState))
    }
  }

  nextQuestion(answer) {
    const { answers, currentQuestion } = this.state
    let newAnswers = answers
    if (currentQuestion > 0) {
      newAnswers = Object.assign({}, answers, {
        [currentQuestion]: answer
      });
    }

    const newState = {
      currentQuestion: currentQuestion + 1,
      answers: newAnswers
    }
    localStorage.setItem('state', JSON.stringify(newState));
    this.setState(newState);
  }

  startOver() {
    localStorage.setItem('state', null);
    this.setState(initialState)
  }

  render() {
    const { answers, currentQuestion } = this.state;
    const nextQuestion = this.nextQuestion;
    let component;
    switch ( currentQuestion ) {
      case 0:
        component = <Intro nextQuestion={nextQuestion} />;
        break
      case 21:
        component = <Outro score={iq(questions, answers)} tryAgain={this.startOver} />;
        break
      default:
        component = <Question num={currentQuestion} question={questions[currentQuestion]} nextQuestion={nextQuestion} startOver={this.startOver} />
        break
    }

    return (
      <div className="sans-serif">
        {component}
      </div>
    );
  }
}

export default App;
