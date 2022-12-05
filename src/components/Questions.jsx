import React from 'react'
import SingleQuestion from './SingleQuestion';

export default function Questions({questions, selectAnswer, checkAnswers, checked}) {

  return (
    <div className="questions-container">
      <SingleQuestion 
        questions={questions} 
        selectAnswer={selectAnswer} 
        checkAnswers={checkAnswers}
        checked={checked} />
    </div>
  )
}
