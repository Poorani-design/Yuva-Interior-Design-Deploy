import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./components/NotFound/NotFound";
import Model from "./components/Modal/Modal";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/appointment" element={<Model />} />
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
