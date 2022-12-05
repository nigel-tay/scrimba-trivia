import React from 'react'

export default function SingleQuestion({questions, selectAnswer}) {

    /** kiv shuffle functionality */
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    

    return (
        <div className="singlequestion-container">
            {
                questions.map(({questionId, question, answers}) => (
                    
                    <div key={questionId}>
                        <h1>{question}</h1>
                        <div className="button-container">
                            {shuffle(answers.map(({buttonId, text}) => ( //Passing edited id to function so that click knows which button to highlight
                                <button className="answer-button inter" onClick={() => selectAnswer(buttonId)} >{text}</button>
                            )))}
                        </div>
                        <hr />
                    </div>
                ))
            }
            <button className='check-button inter'>Check Answers</button>
        </div>
  )
}
