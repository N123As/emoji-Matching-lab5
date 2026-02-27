import React, { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { settings, setSettings } = useGameStore();
  const [difficulty, setDifficulty] = useState(settings.difficulty);
  const [speed, setSpeed] = useState(settings.speed);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSettings({ difficulty, speed });
    navigate("/");
  };

  return (
    <div className="page settings text-center">
      <h1>⚙️ Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>
          Difficulty:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
             <option value="easy">Easy (6 emojis)</option>
             <option value="medium">Medium (8 emojis)</option>
             <option value="hard">Hard (10 emojis)</option>
          </select>
        </label>

        <label>
          Flip speed:
          <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
             <option value="fast">Fast</option>
             <option value="normal">Normal</option>
             <option value="slow">Slow</option>
          </select>
        </label>

        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        💾 Save
        </button>
      </form>
    </div>
  );
}
