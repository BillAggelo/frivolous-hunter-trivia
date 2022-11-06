import React, { useEffect, useState } from "react";
import Title from "./components/title";
// @ts-ignore
import Question from "./components/question.tsx";
// @ts-ignore
import { retriveTriviaQuestions } from "./fetchData/triviaQuestions.tsx";
import "./App.css";

export default function App() {
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    retriveTriviaQuestions().then((data) => {
      setQuestionsList(data);
    });
  }, []);

  return (
    <React.Fragment>
      <Title />

      <main className="container">
        {questionsList.length && <Question questions={questionsList} />}
      </main>
    </React.Fragment>
  );
}
