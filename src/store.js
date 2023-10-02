import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { title: 'Test Task', status: 'PLANNED' },
  ],
  addTask: (title, status) => set((state) => ({
    tasks: [...state.tasks, { title, status }]
  })),
});

export const useStore = create(store);
