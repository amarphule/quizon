import React from "react";
import { Header } from "../../Components";
import "./Result.css";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  const navigate = useNavigate();
  const startAgainHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="mt-5  text-center">Result page</div>
      <div className="text-center">
        <button
          className="m-1 btn btn-info-outline"
          onClick={startAgainHandler}
        >
          Start Again
        </button>
      </div>
    </div>
  );
};
