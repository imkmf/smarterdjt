import React, { Component } from 'react';
import Intro from './Intro';
import Question from './Question';
import Outro from './Outro';

import questions from './questions';
import iq from './iq';

class App extends Component {
  constructor() {
    super()
    this.state = {
      answers: {
      },
      currentQuestion: 0
    }

    this.nextQuestion = this.nextQuestion.bind(this)
  }

  nextQuestion(answer) {
    const { answers, currentQuestion } = this.state
    let newAnswers = answers
    if (currentQuestion > 0) {
      newAnswers = Object.assign({}, answers, {
        [currentQuestion]: answer
      });
    }

    this.setState({
      currentQuestion: currentQuestion + 1,
      answers: newAnswers
    })
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
        component = <Outro score={iq(questions, answers)} />;
        break
      default:
        component = <Question num={currentQuestion} question={questions[currentQuestion]} nextQuestion={nextQuestion} />
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
