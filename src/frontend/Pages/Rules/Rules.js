import React from "react";
import { Footer, Header } from "../../Components";
import { useNavigate } from "react-router-dom";
import "./Rules.css";

const Rules = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question");
  };
  return (
    <div className="pagewrap">
      <Header />
      <div className="container">
        <h1>Rules to Solve Quiz</h1>
        <ol>
          <li>You can choose 1 answer amongs the given options.</li>
          <li>You will get 2 point for each correct answer.</li>
          <li>
            You can see you name and score left and right respectively on top of
            question.
          </li>
          <li>
            On click of Next you will get next question of selected category.
          </li>
          <li>
            After completing all questions you will see total score you got.
          </li>
        </ol>
        <button className="btn btn-cta-outline-icon" onClick={handleClick}>
          Play Quiz
        </button>
      </div>
      <Footer />
    </div>
  );
};

export { Rules };
