import { Route, Routes } from "react-router-dom";
import Home from "./frontend/Pages/Home/Home";
import "./App.css";
import Rules from "./frontend/Pages/Rules/Rules";

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
