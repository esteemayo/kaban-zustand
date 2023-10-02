import { create } from 'zustand';


const store = (set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
});

export const useModal = create(store);
