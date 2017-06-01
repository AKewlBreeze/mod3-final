import * as actions from "../actions";
import { connect } from "react-redux";
import Quizzes from "../components/Quizzes/Quizzes";

const mapStateToProps = state => {
  return { quizzes: state.quizzes, quizzesLoaded: actions.quizzesLoaded };
};

const mapDispatchToProps = dispatch => {
  return {
    quizzesLoaded: quizzes => {
      dispatch(actions.quizzesLoaded(quizzes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes);
