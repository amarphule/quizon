import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  const setScoreHandler = () => {
    setScore((prev) => prev + 2);
  };
  const clearScore = () => {
    setScore(0);
  };
  return (
    <ScoreContext.Provider value={{ score, setScoreHandler, clearScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

const useScore = () => useContext(ScoreContext);

export { useScore, ScoreProvider };
