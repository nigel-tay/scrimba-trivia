import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [started, setStarted] = useState(false) // REMEMBER TO CHANGE BACK TO FALSE
  const [questions, setQuestions] = useState([])
  const [selected, setSelected] = useState(false);

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function fetchData() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
          let encoded = data.results
          let decoded = encoded.map(question => {
            return {...question,
              id: uuidv4(),
              question: decodeHtml(question.question),
              answers: 
              [
                decodeHtml(question.correct_answer), 
                ...question.incorrect_answers.map(answer => decodeHtml(answer))
              ]
              }
          })
          setQuestions(decoded)
      })
  }

  function startQuiz() {
    fetchData();
    setStarted(prev => !prev);
  }

  // function selectAnswer(id) {
  //   console.log()
  // }

  return (
    <div className="App">
      {
        started ? 
        <Questions questions={questions} selected={selected} /> : 
        <Start startQuiz={startQuiz} /> 
      }
    </div>
  )
}

export default App
