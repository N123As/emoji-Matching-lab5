import React from "react";

export default function EmojiCard({ emoji, isFlipped, onClick }) {
  return (
    <div
       className={`card ${isFlipped ? "flipped" : ""}` }
        onClick={onClick}
    >
        {isFlipped ? emoji : "❓"}
    </div>
  );   
}

