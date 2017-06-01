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
