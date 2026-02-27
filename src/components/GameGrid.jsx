import React from "react";
import EmojiCard from "./EmojiCard";

								
export default function GameGrid({ cards,flipped,matched,onFlip }){
	return (
	<div className="game-grid">
		{cards.map((card) => (
			<EmojiCard
				key={card.id}
				emoji={card.emoji}
				isFlipped={flipped.includes(card.id) || matched.includes(card.id)}
				onClick={() => onFlip(card.id)}
			/>
		))}
	</div>);
}

