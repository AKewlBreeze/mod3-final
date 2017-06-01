import React from 'react';
import './Answers.css'

export const Answers = (props) => {
  console.log(props)
  const {id, title, answers} = props
  const questionAnswers = answers.map((answer, index) => {

    return(
      <div key={index}>
        <p className='answer'><input value={answer.score} className='radio' type='radio' name={`radio${id}`}/>{answer.title}</p>
      </div>
    )
  })

  return(
    <div>
    {questionAnswers}
    </div>
  )
}
