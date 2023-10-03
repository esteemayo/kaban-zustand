import { create } from 'zustand';

const store = (set) => ({
  tasks: [
    {
      id: 1,
      title: 'Test Task',
      status: 'PLANNED',
    },
  ],
  draggedTask: null,
  addTask: (payload) => set((state) => ({
    tasks: [...state.tasks, payload]
  })),
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

export const useTask = create(store);
