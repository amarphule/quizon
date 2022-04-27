import React from "react";

import "./SingleQuestion.css";

const SingleQuestion = ({ quiz }) => {
  const { _id, answer, options, question } = quiz;

  return (
    <div className="card card-single-que">
      <div className="card-details-text">
        <div className="title pt-1">{question}</div>
        <div className="btns mt-3">
          {options.map((option, index) => (
            <button key={index} className="btn btn-cta-outline">
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SingleQuestion };
