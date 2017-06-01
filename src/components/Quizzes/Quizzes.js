import React from 'react'
import {QuizCard} from "../QuizCard/QuizCard.js";

export const Quizzes = ({ quizzes, addQuiz }) => {
  if(!quizzes.quizzes.length){
    return <h2>loading...</h2>
  }
  return (
    <section className="Quizzes">
      <h3>Quizzes</h3>
      <ul>
        { quizzes.quizzes.map((quiz, i) => <li key={i}>{quiz.title}</li>) }
      </ul>
      <QuizCard {...quizzes}/>
      <button onClick={ () => addQuiz() }>Submit</button>
    </section>
  )
}


// go over the quiz.question and follow the same pattern from creating quizz
// define a quiz component w/inputs
// get question titles
// then get question answers
// actions names based on what the state changes to when actions occur
