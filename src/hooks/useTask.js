import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    {
      id: 1,
      title: 'Test Task',
      status: 'PLANNED',
    },
  ],
  addTask: (payload) => set((state) => ({
    tasks: [...state.tasks, payload]
  })),
});

export const useTask = create(store);
