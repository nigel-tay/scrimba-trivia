import React from 'react'
import SingleQuestion from './SingleQuestion';

export default function Questions({questions, selectAnswer}) {

  return (
    <div className="questions-container">
      <SingleQuestion questions={questions} selectAnswer={selectAnswer} />
    </div>
  )
}
