//useGameLogic.js: Unexpected token (28:0) *sigh*
import { useState, useEffect } from "react";

/**
 * @returns {Object}
 */
export function useGameLogic() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const flipCard = () => {};

  useEffect(() => {
    if (cards.length === 0) return;
    const uniqCount = new Set(matched).size;
    if (uniqCount === cards.length) {
      setIsComplete(true);
    }
  }, [matched, cards.length]);

  return {
    cards,
    flipped,
    matched,
    moves,
    isComplete,
    flipCard,
  };
}
