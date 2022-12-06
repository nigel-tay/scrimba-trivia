import React from 'react'

export default function SingleQuestion({questions, selectAnswer, checkAnswers, checked, score, playAgain}) {    

    return (
        <div className="singlequestion-container">
            {
                checked ?

                <>
                    {questions.map(({questionId, question, answers}) => (
                        
                        <div key={questionId}>
                            <h1>{question}</h1>
                            <div className="button-container">
                                {answers.map(({buttonId, text, selected}) => ( //Passing edited id to function so that click knows which button to highlight
                                    <button 
                                    key={buttonId} 
                                    className={selected? "selected-checked checked-button inter" : "checked-button inter"} 
                                    disabled>{text}</button>
                                ))}
                            </div>
                            <hr />
                        </div>
                    ))}
                    <div className="playagain-container">
                        <h2 className="inter">You scored {score} correct answers</h2>
                        <button className='check-button inter' onClick={playAgain}>Play again</button>
                    </div>
                </> :

                <>
                    {questions.map(({questionId, question, answers}) => (
                        
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
                    ))}
                    
                    <button className='check-button inter' onClick={checkAnswers}>Check Answers</button>
                </>

            }
        </div>
  )
}
