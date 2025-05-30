import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TariffDetails from "./pages/TariffDetails";
import About from "./pages/About";
import SmartSaver from "./pages/SmartSaver";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tariff" element={<TariffDetails />} /> {/* Add this route */}
        <Route path="/about" element={<About />} />
        <Route path="/smartsaver" element={<SmartSaver />} />
      </Routes>
    </Router>
  );
}

export default App;
