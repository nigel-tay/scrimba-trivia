import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [started, setStarted] = useState(false); // REMEMBER TO CHANGE BACK TO FALSE
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

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

  function fetchData() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => {
          let encoded = data.results
          let decoded = encoded.map(question => {
            return {...question,
              questionId: uuidv4(),
              question: decodeHtml(question.question),
              answers: shuffle([
                          {
                            buttonId: uuidv4(),
                            text: decodeHtml(question.correct_answer),
                            selected: false,
                            correct: true
                          }, 
                          ...question.incorrect_answers.map(incorrectAnswer => {
                            return {
                              buttonId: uuidv4(),
                              text: decodeHtml(incorrectAnswer),
                              selected: false,
                              correct: false
                            }
                          })
                        ])
              }
          })
          setQuestions(decoded)
      })
  }

  function startQuiz() {
    fetchData();
    setStarted(prev => !prev);
  }

  function selectAnswer(qId, bId) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        console.log(question.questionId, qId)
        return question.questionId === qId ?
        {
          ...question,
          answers: question.answers.map ((answer) => {
            console.log(typeof answer.buttonId, typeof bId, answer.selected)
            return answer.buttonId === bId ?
            {
              ...answer,
              selected: !answer.selected
            } :
            {
              ...answer,
              selected: false
            }
          })
        } :
        question
      })
    })
  }

  function checkAnswers() {
    let tempScore = 0;
    questions.forEach(question => {
      console.log(question.correct_answer)
      question.answers.forEach(answer => {
        if (answer.selected) {
          if (answer.correct) {
            tempScore++
          }
        }
      })
    })
    setScore(tempScore);
    setChecked(true);
  }

  function playAgain() {
    setStarted(prev => !prev);
    setChecked(prev => !prev);
    setScore(0);
  }

  return (
    <div className="App">
      {
        started ? 
        <Questions 
          questions={questions} 
          selectAnswer={selectAnswer} 
          checkAnswers={checkAnswers}
          checked={checked}
          score={score}
          playAgain={playAgain} /> : 
        <Start startQuiz={startQuiz} /> 
      }
    </div>
  )
}

export default App
