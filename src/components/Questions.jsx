import React from 'react'
import SingleQuestion from './SingleQuestion';
import topright from '../assets/images/questions-topright.png';
import botleft from '../assets/images/questions-botleft.png';

export default function Questions({questions, selectAnswer, checkAnswers, checked, score, playAgain}) {

  return (
    <div className="questions-container">
      <img className="topright" src={topright} />
      <SingleQuestion 
        questions={questions} 
        selectAnswer={selectAnswer} 
        checkAnswers={checkAnswers}
        checked={checked}
        score={score}
        playAgain={playAgain} />
      <img className="botleft" src={botleft} />
    </div>
  )
}
