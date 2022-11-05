import axios from "axios";

const getTriviaFiveEasyQuestions = () => {
  return axios
    .get(
      "https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple&encode=url3986"
    )
    .then(({ data }) => {
      console.log(data);
      return data.results.sort(() => 0.5 - Math.random()).slice(0, 5);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTriviaFiveMediumQuestions = () => {
  return axios
    .get(
      "https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple&encode=url3986"
    )
    .then(({ data }) => {
      console.log(data);
      return data.results.sort(() => 0.5 - Math.random()).slice(0, 5);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTriviaFiveHardQuestions = () => {
  return axios
    .get(
      "https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple&encode=url3986"
    )
    .then(({ data }) => {
      console.log(data);
      return data.results.sort(() => 0.5 - Math.random()).slice(0, 5);
    })
    .catch((err) => {
      console.log(err);
    });
};

export function retriveTriviaQuestions() {
  let questions: any[] = [];

  getTriviaFiveEasyQuestions().then((easyQuestions) => {
    questions = questions.concat(easyQuestions);

    getTriviaFiveMediumQuestions().then((mediumQuestions) => {
      questions = questions.concat(mediumQuestions);

      getTriviaFiveHardQuestions().then((hardQuestions) => {
        questions = questions.concat(hardQuestions);

        return questions.sort(() => Math.random() - 0.5);
      });
    });
  });
}
