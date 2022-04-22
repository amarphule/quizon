import { Route, Routes } from "react-router-dom";
import { Home, Rules } from "./frontend/Pages";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
