// G R I D S
import EmojiGrid from "./EmojiGrid"; //

export default {
  title: "Комплексні/EmojiGrid",
  component: EmojiGrid,

  argTypes: {
    emojis: { control: "object" },
  },
};

//version 1: mini grade
export const SmallGrid = {
  args: {
    emojis: ["🍎", "🍎", "🍌", "🍌"],
  },
};

//v 2: big grade
export const LargeGrid = {
  args: {
    emojis: ["🚀", "🚀", "🛸", "🛸", "⭐", "⭐", "🌙", "🌙"],
  },
};
