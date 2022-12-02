import React from 'react'

export default function SingleQuestion({questions}) {

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
                questions.map(({id, question, answers}) => (
                    
                    <div key={id}>
                        <h1>{question}</h1>
                        <div className="button-container">
                            {shuffle(answers).map(answer => (
                                <button>{answer}</button>
                            ))}
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
  )
}
