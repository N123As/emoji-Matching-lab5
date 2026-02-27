import { useNavigate } from "react-router-dom";

/**
 * Provides an ability to start a game with a unique ID or return to settings
 * @component
 */

export default function StartPage() {
  const navigate = useNavigate();

  const startGame = () => {
    const userId = Math.floor(Math.random() * 10000);
    navigate(`/game/${userId}`);
  };

  const openSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">💫 Емоційні Пари | Emotions Pairs</h1>
      <p>Find all pairs as fast as you can!</p>
      <p>Made by Nikita Ivonchik VT-23-1</p>

      <button
        onClick={startGame}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        ▶ START
      </button>
      <button
        onClick={openSettings}
        className="ml-3 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        ⚙️ Settings
      </button>
    </div>
  );
}
