import React from "react";
import MainIndex from "./Mains/Main";
import Risk from "./Mains/RisksST"
import RiskM from "./Mains/Risks";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<MainIndex />} />
          <Route path="/risk" element={<Risk />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
