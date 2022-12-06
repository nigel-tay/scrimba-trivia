import React from 'react'
import SingleQuestion from './SingleQuestion';
import topright from '../assets/images/questions-topright.png';
import botleft from '../assets/images/questions-botleft.png';
import Loading from "../components/Loading";

export default function Questions({questions, selectAnswer, checkAnswers, checked, score, playAgain, loading}) {

  return (
    <div className="questions-container">
      <img className="topright" src={topright} />
      {loading ?
        <Loading /> :
        <SingleQuestion 
          questions={questions} 
          selectAnswer={selectAnswer} 
          checkAnswers={checkAnswers}
          checked={checked}
          score={score}
          playAgain={playAgain} />}
      <img className="botleft" src={botleft} />
    </div>
  )
}
