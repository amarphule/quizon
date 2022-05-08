import React, { useState } from "react";
import { useQuestion, useScore } from "../../Contexts";

import "./SingleQuestion.css";

const SingleQuestion = ({ quiz, nextHandler, result }) => {
  const { _id, answer, options, question } = quiz;
  const { setScoreHandler } = useScore();
  const { setResultArr } = useQuestion();

  const ansCheckHandler = (option) => {
    setResultArr((prevQue) => [...prevQue, option]);
    if (option === answer) {
      setScoreHandler();
    }
    nextHandler();
  };

  const styleHandler = (option) => {
    if (result == undefined) {
      return "btn-cta-outline";
    }
    if (option == answer) {
      return "btn-success-outline";
    }
    if (result == answer && option == result) {
      return "btn-success-outline";
    } else if (result !== answer && option == result) {
      return "btn-error-outline";
    }
    return "btn-cta-outline";
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
              className={`btn ${styleHandler(option)}`}
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
