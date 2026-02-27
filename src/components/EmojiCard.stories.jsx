import EmojiCard from "./EmojiCard"; //

export default {
  title: "Базові/EmojiCard",
  component: EmojiCard,

  argTypes: {
    emoji: { control: "text" },
    isRevealed: { control: "boolean" },
  },
};

//version 1: card's closed
export const Hidden = {
  args: {
    emoji: "😀",
    isRevealed: false,
  },
};
//v 2: card's opened
export const RevealedFire = {
  args: {
    emoji: "🔥",
    isRevealed: true,
  },
};
//v 3: card's opned (diff emojie)
export const RevealedCat = {
  args: {
    emoji: "😸",
    isRevealed: true,
  },
};
