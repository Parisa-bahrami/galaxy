import { create } from "zustand";

const useLayoutStore = create((set) => ({
  scrollContainer: null,
  setScrollContainer: (scrollContainer) => set({ scrollContainer }),
}));

export default useLayoutStore;
