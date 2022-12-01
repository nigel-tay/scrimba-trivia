import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function SingleQuestion({questions}) {

    return (
        <div className="singlequestion-container">
            {
                questions.map(({question, correct_answer, incorrect_answers}) => (
                    <div key={uuidv4()}>
                        <h1>{question}</h1>
                        <button>{correct_answer}</button>
                        {incorrect_answers.map(answer => (
                            <button>{answer}</button>
                        ))}
                    </div>
                ))
            }
        </div>
  )
}
