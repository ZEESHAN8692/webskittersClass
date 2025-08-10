import { create } from "zustand";

export const useCount = create((set) => ({
  count: 0,
  increment: async  () => {
    const promis = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    await promis;
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
