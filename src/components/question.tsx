import * as React from "react";
const { useEffect, useState } = React;

export default function Question(props: any) {
  const questions = props.questions;
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  var answers = initializeCurrentPosibleAnswers();

  useEffect(() => {
    if (!currentQuestionIndex) return;

    if (currentQuestionIndex === 14)
      //@ts-ignore
      document.getElementById("nextQuestionBtnID").style.visibility = "hidden";
  }, [currentQuestionIndex]);

  function initializeCurrentPosibleAnswers() {
    let result: any[] = [];
    let wrongAnswers = decodeURIComponent(
      questions[currentQuestionIndex].incorrect_answers
    ).split(",");
    let correctAnswer = decodeURIComponent(
      questions[currentQuestionIndex].correct_answer
    );

    result = [...wrongAnswers, correctAnswer];

    return result.sort(() => Math.random() - 0.5);
  }

  function getAnswerNameForButtons() {
    if (!answers.length) return "Not found!";

    let result = answers[0];
    answers.shift();

    return result;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p
              className="lead px-md-6 mb-4 mt-4"
              style={{ fontWeight: "bold", fontFamily: "Segoe Print" }}
            >
              Question {currentQuestionIndex + 1}/{questions.length}
            </p>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mb-lg-6">
          <div className="col-12 text-center">
            <h2
              className="h1 px-lg-5"
              style={{ fontWeight: "bold", fontFamily: "Segoe Print" }}
            >
              {decodeURIComponent(questions[currentQuestionIndex].question)}
            </h2>
          </div>
        </div>
        <div className="row justify-content-around mb-5">
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg p-3"
              style={{
                fontWeight: "bold",
                fontFamily: "Segoe Print",
                border: "3px solid black",
              }}
            >
              {getAnswerNameForButtons()}
            </button>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg p-3"
              style={{
                fontWeight: "bold",
                fontFamily: "Segoe Print",
                border: "3px solid black",
              }}
            >
              {getAnswerNameForButtons()}
            </button>
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg p-3"
              style={{
                fontWeight: "bold",
                fontFamily: "Segoe Print",
                border: "3px solid black",
              }}
            >
              {getAnswerNameForButtons()}
            </button>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg p-3"
              style={{
                fontWeight: "bold",
                fontFamily: "Segoe Print",
                border: "3px solid black",
              }}
            >
              {getAnswerNameForButtons()}
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-end mt-4">
        <div className="col-4" style={{ textAlign: "end" }}>
          <button
            id="nextQuestionBtnID"
            type="button"
            className="btn btn-primary btn-lg p-3"
            style={{
              fontWeight: "bold",
              fontFamily: "Segoe Print",
              border: "3px solid black",
            }}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          >
            {"-->"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
