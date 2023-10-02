import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { title: 'Test Task', status: 'PLANNED' },
  ],
})

export const useStore = create(store);
