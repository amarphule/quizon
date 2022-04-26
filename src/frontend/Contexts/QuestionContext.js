import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await axios.get("/api/quizzes");
      console.log();
      setQuestions(resp.data.quizes);
    })();
  }, []);
  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export { useQuestion, QuestionProvider };
