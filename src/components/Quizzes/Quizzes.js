import React from 'react'

const Quizzes = ({ quizzes, addQuiz }) => {
  return (
    <section className="Quizzes">
      <h3>Quizzes</h3>
      <ul>
        { quizzes.quizzes.map((quiz, i) => <li key={i}>{quiz.title}</li>) }
      </ul>
      <button onClick={ () => addQuiz() }>Submitr</button>
    </section>
  )
}

export default Quizzes;


// go over the quiz.question and follow the same pattern from creating quizz
// define a quiz component w/inputs
// get question titles
// then get question answers
// actions names based on what the state changes to when actions occur
