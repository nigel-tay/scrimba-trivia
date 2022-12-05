import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [started, setStarted] = useState(false); // REMEMBER TO CHANGE BACK TO FALSE
  const [questions, setQuestions] = useState([]);
  const [checked, setChecked] = useState(false);

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
              // answerText: 
              // [
              //   decodeHtml(question.correct_answer), 
              //   ...question.incorrect_answers.map(answer => decodeHtml(answer))
              // ],
              answers: shuffle([
                          {
                            buttonId: uuidv4(),
                            text: decodeHtml(question.correct_answer),
                            selected: false,
                          }, 
                          ...question.incorrect_answers.map(incorrectAnswer => {
                            return {
                              buttonId: uuidv4(),
                              text: decodeHtml(incorrectAnswer),
                              selected: false,
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
    // let parentQuestion = questions.find(question => question.questionId === qId);
    // let button = parentQuestion.answers.find(answer => answer.buttonId === bId)
    // console.log(parentQuestion)

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

  function checkAnswers(selected) {
    return;
  }

  return (
    <div className="App">
      {
        started ? 
        <Questions 
          questions={questions} 
          selectAnswer={selectAnswer} 
          checkAnswers={checkAnswers}
          checked={checked} /> : 
        <Start startQuiz={startQuiz} /> 
      }
    </div>
  )
}

export default App
