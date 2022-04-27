import { Route, Routes } from "react-router-dom";
import { Home, Question, Rules } from "./frontend/Pages";
import "./App.css";
import { Result } from "./frontend/Pages/Result/Result";
import { SingleQuestion } from "./frontend/Components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
