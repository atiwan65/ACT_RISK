import React from "react";
import MainIndex from "./Mains/Main";
import Risk from "./Mains/Risks";
import MainIndexT from "./Mains/MainT";
import MainIndexN from "./Mains/MainTR";
import MainIndexF from "./Mains/MainF";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainIndex />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/M" element={<MainIndexT />} />
          <Route path="/N" element={<MainIndexN />} />
          <Route path="/D" element={<MainIndexF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
