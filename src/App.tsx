/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, MouseEvent, useState } from "react";

import "./App.css";
import { fetchQuestions, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import loader from "./assets/loading.gif";

const TOTAL_QUESTIONS = 20;

export type AnswerObject = {
  question: string;
  correctAnswer: string;
  answer: string;
  correct: boolean;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[] | any[]>([]);
  const [score, setScore] = useState<number>(0);
  const [complete, setComplete] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<Difficulty | any>(
    Difficulty.EASY
  );

  // Start a new quiz
  const startQuiz = async () => {
    setComplete(false);
    setLoading(true);

    const new_questions = await fetchQuestions(TOTAL_QUESTIONS, difficulty);
    setQuestions(new_questions);

    setLoading(false);
    setGameOver(false);
  };

  // check for correct answers and update score
  const checkAnswers = (e: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = (questions[number].correct_answer = answer);
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        correctAnswer: questions[number].correct_answer,
        answer,
        correct,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const handleNext = () => {
    if (number < TOTAL_QUESTIONS - 1) setNumber((prev) => prev + 1);
    else setComplete(true);
  };

  const handleDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Typescript Quiz</h1>
        {complete && <div className="complete">Quiz is already completed</div>}

        {gameOver || complete ? (
          <>
            <p>Select Difficulty</p>
            <select
              className="selectOp"
              value={difficulty}
              onChange={handleDifficulty}
            >
              {Object.keys(Difficulty).map((key) => (
                <option className="selectOp" key={key} value={Difficulty[key]}>
                  {key}
                </option>
              ))}
            </select>
            <button className="start" onClick={startQuiz}>
              Start Quiz
            </button>
          </>
        ) : null}

        {!gameOver ? <p className="score">score: {score}</p> : null}
        {loading ? <img className="loader" src={loader} alt="loading" /> : null}
        {!loading && !gameOver && !complete && (
          <QuestionCard
            questionNum={number + 1}
            question={questions[number].question}
            answers={questions[number].answers}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswers}
          />
        )}

        {!loading && !gameOver && !complete && !!userAnswers[number] && (
          <button className="next" onClick={handleNext}>
            Next Question
          </button>
        )}
      </Wrapper>
    </>
  );
}

export default App;
