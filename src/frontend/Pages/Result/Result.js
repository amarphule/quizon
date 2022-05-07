import React from "react";
import { Footer, Header, SingleQuestion } from "../../Components";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { useQuestion, useScore } from "../../Contexts";
import "./Result.css";

export const Result = () => {
  const navigate = useNavigate();
  const { score, clearScore } = useScore();
  const { questions, resultArr, setResultArr } = useQuestion();

  const selectedType = sessionStorage.getItem("name");

  const selectedObj = questions.reduce(
    (acc, curr) => (curr.title === selectedType ? curr : acc),
    {}
  );

  const startAgainHandler = () => {
    navigate("/");
    setResultArr([]);
    clearScore();
    sessionStorage.removeItem("name");
  };
  return (
    <div className="pagewrap">
      <Header />
      <div className="mt-5 text-center">
        {score > 5 ? (
          <h1>Yay!!! 🥳 Your score is {score} good job play again.</h1>
        ) : (
          <h1>
            Oh Ohh.. 😐 Your score is <span>{score}</span>, give it a try once
            again.
          </h1>
        )}
        <div className="space-around">
          {selectedObj.mcqs.map((que, i) => {
            return (
              <SingleQuestion quiz={que} result={resultArr[i]} key={que._id} />
            );
          })}
        </div>
        <button
          className="m-1 btn btn-info-outline"
          onClick={startAgainHandler}
        >
          Start Again
        </button>
      </div>
      <Footer />
    </div>
  );
};
