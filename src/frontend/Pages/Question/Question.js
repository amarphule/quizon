import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SingleQuestion } from "../../Components";
import { useQuestion } from "../../Contexts";

export const Question = () => {
  const [singleQue, setSingleQue] = useState(0);
  const { questions } = useQuestion();
  const navigate = useNavigate();

  const selectedType = sessionStorage.getItem("name");

  const selectedObj = questions.reduce(
    (acc, curr) => (curr.title === selectedType ? curr : acc),
    {}
  );

  const quitHandler = () => {
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
      <div className="mt-5 space-around">
        {selectedObj && <SingleQuestion quiz={selectedObj.mcqs[singleQue]} />}
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
