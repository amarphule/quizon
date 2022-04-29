import React from "react";
import { Footer, Header } from "../../Components";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../Contexts";
import "./Result.css";

export const Result = () => {
  const navigate = useNavigate();
  const { score, clearScore } = useScore();
  const startAgainHandler = () => {
    navigate("/");
    clearScore();
  };
  return (
    <div className="pagewrap">
      <Header />
      <div className="mt-5 text-center">
        {score > 5 ? (
          <h1 className="mt-5">{`Yay!!! 🥳 Your score is ${score} good job play again.`}</h1>
        ) : (
          <h1 className="mt-5">{`Ohh 😐 Your score is ${score}, give it a try once again.`}</h1>
        )}
        <button
          className="m-1 mt-5 btn btn-info-outline"
          onClick={startAgainHandler}
        >
          Start Again
        </button>
      </div>
      <Footer />
    </div>
  );
};
