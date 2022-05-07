import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SingleQuestion } from "../../Components";
import { useQuestion, useScore } from "../../Contexts";

export const Question = () => {
  const [singleQue, setSingleQue] = useState(0);
  const { questions } = useQuestion();
  const navigate = useNavigate();
  const { score } = useScore();

  const selectedType = sessionStorage.getItem("name");

  const selectedObj = questions.reduce(
    (acc, curr) => (curr.title === selectedType ? curr : acc),
    {}
  );

  const quitHandler = () => {
    sessionStorage.removeItem("name");
    navigate("/");
  };

  const nextHandler = () => {
    if (singleQue < selectedObj.mcqs.length - 1) {
      setSingleQue((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="pagewrap">
      <Header />
      <div className="mt-5 space-around text-center">
        <h1>{`Question no: ${singleQue + 1}/${selectedObj.mcqs.length}`}</h1>
        <h1>{`Score: ${score}/${selectedObj.totalScore}`}</h1>
      </div>
      <div className="space-around">
        {selectedObj && (
          <SingleQuestion
            nextHandler={nextHandler}
            quiz={selectedObj.mcqs[singleQue]}
          />
        )}
      </div>
      <div className="btns text-center">
        <button className="m-1 btn btn-info-outline" onClick={quitHandler}>
          Quit
        </button>
        <button className="m-1 btn btn-info-outline" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};
