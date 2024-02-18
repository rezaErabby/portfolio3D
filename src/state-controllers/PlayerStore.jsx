import create from 'zustand';

const usePlayerStore = create((set) => ({
  position: [0, 0, 0],
  updatePosition: (newPosition) => set({ position: newPosition }),
}));

export default usePlayerStore;
