export const addUser = () => {
  return {
    type: 'ADD_USER'
  }
}

export const quizzesLoaded = (quizzes)=> {
  return {
    type: 'QUIZZES_LOADED',
    quizzes:quizzes.quizzes
  }
}
