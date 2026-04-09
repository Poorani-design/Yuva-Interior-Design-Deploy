import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
