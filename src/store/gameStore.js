import { create } from "zustand";

export const useGameStore = create((set) => ({
  settings: {
    difficulty: "easy",
    speed: "normal",
  },
  results: [],

  setSettings: (newSettings) =>
    set(() => ({ settings: newSettings })),

  addResult: (moves) =>
    set((state) => ({
      results: [
        ...state.results,
        { id: Date.now(), moves, date: new Date().toLocaleString() },
      ],
    })),
}));
