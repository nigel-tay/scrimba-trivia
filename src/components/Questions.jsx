import React from 'react'
import SingleQuestion from './SingleQuestion';

export default function Questions({questions}) {
  
  return (
    <div className="questions-container">
      <SingleQuestion questions={questions} />
    </div>
  )
}
