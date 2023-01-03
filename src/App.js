import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/React-Portfolio" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
