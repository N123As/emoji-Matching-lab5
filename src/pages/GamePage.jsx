import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameGrid from "../components/GameGrid";
import { useGameLogic } from "../hooks/useGameLogic";
import { useGameStore } from "../store/gameStore";

export default function GamePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { settings, addResult } = useGameStore();

  const size =
    settings.difficulty === "easy"
      ? 6
      : settings.difficulty === "medium"
      ? 8
      : 10;

  const emojis = ["😀", "😎", "🥰", "🤯", "😴", "👻", "🇺🇦", "🥵", "🥶", "👽"].slice(
    0,
    size
  );

  const speedMap = { fast: 400, normal: 800, slow: 1200 };
  const { cards, flipped, matched, moves, isComplete, flipCard } = useGameLogic(
    emojis,
    speedMap[settings.speed]
  );

	useEffect(() => {
	if (isComplete) {
		addResult(moves);
		setTimeout(() => {
		navigate(`/result/${userId}`, { state: { moves } });
		}, 1000);
		navigate(`/result/${userId}`, { state: { moves } });
		/*setTimeout(() => window.location.reload(), 1005);/*i got no choice left*/
	}
	}, [isComplete, moves, navigate, userId, addResult]);

  return (
    <div className="page game text-center">
      <h1>Matching Emojis — Player {userId}</h1>
      <p>Moves: {moves}</p>
      <GameGrid
        cards={cards}
        flipped={flipped}
        matched={matched}
        onFlip={flipCard}
      />
    </div>
  );
}

