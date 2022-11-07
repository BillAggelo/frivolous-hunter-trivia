import * as React from "react";
// @ts-ignore
import IAnswerBtn from "./interface/IAnswerBtn.tsx";
// @ts-ignore
import Result from "./result.tsx";
const { useEffect, useState } = React;

export default function Question(props: any) {
  const points = new Map([
    ["easy", 15],
    ["medium", 18],
    ["hard", 25],
  ]);

  enum Difficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD",
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions] = useState(props.questions);
  const btnIDArray = [
    "btnFirstAnswer",
    "btnSecondAnswer",
    "btnThirdAnswer",
    "btnFourthAnswer",
  ];
  const [answers, setAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [easyAnsCount, setEasyAnsCount] = useState(0);
  const [mediumAnsCount, setMediumAnsCount] = useState(0);
  const [hardAnsCount, setHardAnsCount] = useState(0);
  const [isNextQuestionBtnDisabled, setIsNextQuestionBtnDisabled] =
    useState(true);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [btnAnswer, setBtnAnswer] = useState<IAnswerBtn[]>(initBtnProperties());
  const [questionScreenDisplay, setQuestionScreenDisplay] = useState("block");
  const [resultScreenDisplay, setResultScreenDisplay] = useState("none");
  const [givenAnsResult, setGivenAnsResult] = useState("");
  const [givenAnsColor, setGivenAnsColor] = useState("");

  useEffect(() => {
    let resultAnswers = initializeCurrentPosibleAnswers();
    setAnswers(resultAnswers);
    btnAnswer.forEach(
      (el, i) => ((el.color = ""), (el.answer = resultAnswers[i]))
    );
    setBtnAnswer(btnAnswer);
    setGivenAnsResult("");
    setGivenAnsColor("");
    setIsBtnDisabled(false);
    setIsNextQuestionBtnDisabled(true);
  }, [currentQuestionIndex]);

  useEffect(() => {
    let resultAnswers = initializeCurrentPosibleAnswers();
    setAnswers(resultAnswers);
    btnAnswer.forEach((el, i) => (el.answer = resultAnswers[i]));
    setBtnAnswer(btnAnswer);
  }, [questions]);

  function initBtnProperties() {
    let result: any[] = [];
    btnIDArray.forEach((el, i) =>
      result.push({ id: el, color: "", answer: answers[i] })
    );

    return result;
  }

  function initializeCurrentPosibleAnswers() {
    let result: any[] = [];
    let wrongAnswers: any[] = [];
    questions[currentQuestionIndex].incorrect_answers.forEach((el) =>
      wrongAnswers.push(decodeURIComponent(el))
    );
    let correctAnswer = decodeURIComponent(
      questions[currentQuestionIndex].correct_answer
    );

    result = [...wrongAnswers, correctAnswer];

    return result.sort(() => Math.random() - 0.5);
  }

  const increaseDifficaltyCounters = (diff) => {
    if (diff === Difficulty.EASY) {
      setEasyAnsCount(easyAnsCount + 1);
      return;
    }

    if (diff === Difficulty.MEDIUM) {
      setMediumAnsCount(mediumAnsCount + 1);
      return;
    }

    if (diff === Difficulty.HARD) {
      setHardAnsCount(hardAnsCount + 1);
      return;
    }
  };

  const calculateFinalScore = () => {
    let questionDifficalty = questions[currentQuestionIndex].difficulty;

    increaseDifficaltyCounters(questionDifficalty.toUpperCase());
    setCorrectAnswerCount(correctAnswerCount + 1);
    setScore(score + points.get(questionDifficalty)!);
  };

  const checkGivenAnswer = (answer) => {
    let correctAnswer = decodeURIComponent(
      questions[currentQuestionIndex].correct_answer
    );
    let isAnswerCorrect = correctAnswer === answer.answer;

    btnAnswer.forEach((el) => {
      const btn = document.getElementById(el.id) as HTMLButtonElement;
      if (btn.innerHTML === correctAnswer) {
        el.color = "#187B50";
        setBtnAnswer(btnAnswer);
      }
    });

    if (isAnswerCorrect) {
      setGivenAnsColor("#187B50");
      calculateFinalScore();
    } else {
      setGivenAnsColor("#C7293B");
    }

    setGivenAnsResult(
      "Correct answer: " + correctAnswer + "! Your answer: " + answer.answer
    );
    setIsBtnDisabled(true);
    setIsNextQuestionBtnDisabled(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: questionScreenDisplay }}>
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
                id={btnAnswer[0].id}
                type="button"
                className="btn btn-outline-dark btn-lg p-3"
                disabled={isBtnDisabled}
                aria-pressed="false"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Segoe Print",
                  border: "3px solid black",
                  backgroundColor: btnAnswer[0].color,
                }}
                onClick={() => checkGivenAnswer(btnAnswer[0])}
              >
                {btnAnswer[0].answer}
              </button>
            </div>
            <div className="col-4">
              <button
                id={btnAnswer[1].id}
                type="button"
                className="btn btn-outline-dark btn-lg p-3"
                disabled={isBtnDisabled}
                aria-pressed="false"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Segoe Print",
                  border: "3px solid black",
                  backgroundColor: btnAnswer[1].color,
                }}
                onClick={() => checkGivenAnswer(btnAnswer[1])}
              >
                {btnAnswer[1].answer}
              </button>
            </div>
          </div>
          <div className="row justify-content-around mt-5">
            <div className="col-4">
              <button
                id={btnAnswer[2].id}
                type="button"
                className="btn btn-outline-dark btn-lg p-3"
                disabled={isBtnDisabled}
                aria-pressed="false"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Segoe Print",
                  border: "3px solid black",
                  backgroundColor: btnAnswer[2].color,
                }}
                onClick={() => checkGivenAnswer(btnAnswer[2])}
              >
                {btnAnswer[2].answer}
              </button>
            </div>
            <div className="col-4">
              <button
                id={btnAnswer[3].id}
                type="button"
                className="btn btn-outline-dark btn-lg p-3"
                disabled={isBtnDisabled}
                aria-pressed="false"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Segoe Print",
                  border: "3px solid black",
                  backgroundColor: btnAnswer[3].color,
                }}
                onClick={() => checkGivenAnswer(btnAnswer[3])}
              >
                {btnAnswer[3].answer}
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <span
                className="lead px-md-6"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Segoe Print",
                  color: givenAnsColor,
                }}
              >
                {givenAnsResult}
              </span>
            </div>
          </div>
        </div>

        <div className="row justify-content-end mt-4">
          <div className="col-4" style={{ textAlign: "end" }}>
            <button
              id="nextQuestionBtnID"
              type="button"
              className="btn btn-outline-dark btn-lg p-3"
              disabled={isNextQuestionBtnDisabled}
              aria-pressed="false"
              style={{
                fontWeight: "bold",
                fontFamily: "Segoe Print",
                border: "3px solid black",
              }}
              onClick={() => {
                if (currentQuestionIndex !== 14)
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                else {
                  setQuestionScreenDisplay("none");
                  setResultScreenDisplay("block");
                }
              }}
            >
              {"-->"}
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: resultScreenDisplay }}>
        <Result
          score={score}
          correctAnswerCount={correctAnswerCount}
          questionsCount={questions.length}
          easyCounter={easyAnsCount}
          mediumCounter={mediumAnsCount}
          hardCounter={hardAnsCount}
        />
      </div>
    </React.Fragment>
  );
}
