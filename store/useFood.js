// store/useFoodStore.js
import { create } from 'zustand';

const useFoodStore = create((set) => ({
  selectedFood: null,
  setSelectedFood: (food) => set({ selectedFood: food }),
}));

export default useFoodStore;

	