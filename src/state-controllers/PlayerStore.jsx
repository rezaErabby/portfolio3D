import create from 'zustand';

const usePlayerStore = create((set) => ({
  position: [1.05, 0.89, 0.1],
  updatePosition: (newPosition) => set({ position: newPosition }),
}));

export default usePlayerStore;
