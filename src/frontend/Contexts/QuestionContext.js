import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [resultArr, setResultArr] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("/api/quizzes");
      setQuestions(resp.data.quizes);
    })();
  }, []);

  return (
    <QuestionContext.Provider value={{ questions, resultArr, setResultArr }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export { useQuestion, QuestionProvider };
