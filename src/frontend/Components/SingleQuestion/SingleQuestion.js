import React from "react";
import { useScore } from "../../Contexts";

import "./SingleQuestion.css";

const SingleQuestion = ({ quiz, nextHandler }) => {
  const { _id, answer, options, question } = quiz;
  const { setScoreHandler } = useScore();

  const ansCheckHandler = (selectedValue) => {
    if (answer === selectedValue) {
      setScoreHandler();
    }
    nextHandler();
  };
  return (
    <div className="card card-single-que">
      <div className="card-details-text">
        <div className="title pt-1">{question}</div>
        <div className="btns mt-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => ansCheckHandler(option)}
              className="btn btn-cta-outline"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SingleQuestion };
