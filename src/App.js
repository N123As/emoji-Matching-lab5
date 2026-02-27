import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import SettingsPage from "./pages/SettingsPage";
import "./styles/base.css";
//atching-lab5-main\src\App.js: Unexpected token (51:0)
export default function App() {
  return (
    //Unexpected token (51:0) fix
    <Router>
      <div className="app">
        <Routes>
          {/* 10/13/2025 */}
          <Route path="/" element={<StartPage />} />
          <Route path="/game/:userId" element={<GamePage />} />
          <Route path="/result/:userId" element={<ResultPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>

        {/* cookies */}
        <CookieConsent
          location="bottom"
          buttonText="Прийняти"
          declineButtonText="Тільки необхідні"
          enableDeclineButton
          cookieName="emojiGameCookieConsent"
          style={{
            background: "#2B373B",
            fontSize: "14px",
            alignItems: "center",
          }}
          buttonStyle={{
            backgroundColor: "#10b981",
            color: "#fff",
            fontSize: "13px",
            borderRadius: "5px",
            padding: "8px 15px",
            fontWeight: "bold",
          }}
          declineButtonStyle={{
            backgroundColor: "#ef4444",
            color: "#fff",
            fontSize: "13px",
            borderRadius: "5px",
            padding: "8px 15px",
          }}
          expires={150}
        >
          Ми використовуємо файли cookie для збереження вашого прогресу{" "}
          <a
            href="/privacy-policy.md"
            style={{
              color: "#3b82f6",
              textDecoration: "underline",
              marginLeft: "10px",
            }}
          >
            Політика конфіденційності
          </a>
        </CookieConsent>
      </div>
    </Router>
  );
}

console.log("lab4 test build alpha version");
