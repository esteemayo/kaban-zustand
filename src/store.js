import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    { title: 'Test Task', state: 'PLANNED' },
  ],
})

export const useStore = create(store);
