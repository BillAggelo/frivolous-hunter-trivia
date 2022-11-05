import React, { Component } from "react";
import Title from "./components/title";
import { retriveTriviaQuestions } from "./fetchData/triviaQuestions.tsx";
import "./App.css";

class App extends Component {
  state = {
    QuestionsList: [retriveTriviaQuestions()],
  };
  render() {
    return (
      <React.Fragment>
        <Title />
      </React.Fragment>
    );
  }
}

export default App;
