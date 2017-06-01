import * as actions from "../actions";
import { connect } from "react-redux";
import App from "../components/App/App.js";

const mapStateToProps = state => {
  return { quizzes: state.quizzes };
};

const mapDispatchToProps = dispatch => {
  return {
    quizzesLoaded: quizzes => {
      dispatch(actions.quizzesLoaded(quizzes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
