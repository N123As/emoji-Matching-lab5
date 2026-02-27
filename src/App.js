import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import SettingsPage from "./pages/SettingsPage";
import "./styles/base.css";

export default function App(){
  return (
    <Router>
      <div className="app">
        <Routes>/*10/13/2025*/
          <Route path="/" element={<StartPage />} />
          <Route path="/game/:userId" element={<GamePage />} />
          <Route path="/result/:userId" element={<ResultPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

console.log("lab4 test build alpha version");
