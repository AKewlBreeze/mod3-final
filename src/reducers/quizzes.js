

const quizzes = (state={quizzes:[]}, action) => {
  console.log('quizzes reducer running', state, action)
  switch (action.type) {
    case 'QUIZZES_LOADED':
      console.log("quizzesLoaded", action.quizzes)
      return {quizzes: action.quizzes}
    default:
      return state;
  }
}

export default quizzes
