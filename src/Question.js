import React from 'react';
import Button from './Button';

const Question = ({ num, question, nextQuestion }) => {
  const buttons = question.choices.map(choice => <Button action={nextQuestion.bind(this, choice)} key={choice} text={choice} type="full" />)
  return (
    <article class="ph3 ph5-ns pv2">
      <h1 class="f4 f2-m f-subheadline-l">Question #{num} of 20</h1>
      <p class="f5 f4-m f3-l lh-copy measure mt0">
        {question.text}
      </p>
      {question.image ? <img src={question.image} /> : null}
      <div className="w-100">
        {buttons}
      </div>
      <div className="w-50 pt4">
        {question.gif ? <img className="mw-2" src={question.gif} /> : null}
      </div>
    </article>
  )
}

export default Question;
