import React from 'react';
import { Answers } from '../Answers/Answers.js';
import './QuizCard.css'

export const QuizCard = (props) => {
  const {quizzes} = props
  const questions = quizzes[0].questions
  const questionsArray = questions.map((question, index) => {

    return(
      <div key={index}>
        <p className='question'>{question.title}</p>
        <Answers {...question} id={question.id}/>
      </div>
    )
  })

  return(
    <div>
      {questionsArray}
    </div>
  )
}
