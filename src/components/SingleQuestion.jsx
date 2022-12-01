import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function SingleQuestion({questions}) {
    
    return (
        <div className="singlequestion-container">
            {
                questions.map(question => (
                    <div key={uuidv4()}>
                        <h1>{question.question}</h1>

                    </div>
                ))
            }
        </div>
  )
}
