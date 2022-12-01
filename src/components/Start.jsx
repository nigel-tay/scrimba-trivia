import React from 'react';
import top from '../assets/images/topright.png';
import bot from '../assets/images/botleft.png'

export default function Start({startQuiz}) {

  return (
    <div className="start-container">
        <img className="top" src={top} />
        <img className="bot" src={bot} />
        <h1 className='karla'>Quizzical</h1>
        <h2 className="inter">A fun trivia game for all ages!</h2>
        <button className="inter" onClick={startQuiz} >Start Quiz</button>
    </div>
  )
}
