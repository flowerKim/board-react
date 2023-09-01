import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  user: null,
  setUser: (param) => set({ user: param }),
  removeUser: () => set({ user: null }),
});

const useStore = create(devtools(store));

export default useStore;
