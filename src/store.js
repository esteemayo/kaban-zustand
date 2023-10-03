import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (payload) =>
    set(
      (state) => ({ tasks: [...state.tasks, payload] }),
      false,
      'addTask',
    ),
  deleteTask: (payload) => set((state) => ({
    tasks: state.tasks.filter((item) => item.id !== payload)
  })),
  setDraggedTask: (payload) => set({ draggedTask: payload }),
  moveTask: (payload) =>
    set((state) => ({
      tasks: state.tasks.map((item) =>
        item.title === payload.title ? { title: payload.title, status: payload.status } : item),
    })),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api,
  );

export const useTask = create(
  log(persist(devtools(store), { name: 'store' }))
);
