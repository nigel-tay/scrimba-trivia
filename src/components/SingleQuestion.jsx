import React from 'react'

export default function SingleQuestion({questions, selectAnswer, checkAnswers, checked}) {    

    console.log(questions)

    return (
        <div className="singlequestion-container">
            {
                questions.map(({questionId, question, answers}) => (
                    
                    <div key={questionId}>
                        <h1>{question}</h1>
                        <div className="button-container">
                            {answers.map(({buttonId, text, selected}) => ( //Passing edited id to function so that click knows which button to highlight
                                <button 
                                key={buttonId} 
                                className={selected? "selected answer-button inter" : "answer-button inter"} 
                                onClick={() => selectAnswer(questionId, buttonId)}>{text}</button>
                            ))}
                        </div>
                        <hr />
                    </div>
                ))
            }
            <button className='check-button inter' onClick={checkAnswers}>Check Answers</button>
        </div>
  )
}
