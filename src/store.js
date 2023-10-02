import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { title: 'Test Task', status: 'PLANNED' },
  ],
  addTask: (payload) => set((state) => ({
    tasks: [...state.tasks, payload]
  })),
});

export const useStore = create(store);
