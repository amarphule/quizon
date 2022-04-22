import { Route, Routes } from "react-router-dom";
import Home from "./frontend/Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
