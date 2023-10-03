import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { produce } from 'immer';
import { useEffect, useRef } from 'react';

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (payload) =>
    set(
      produce((state) => {
        state.tasks.push(payload);
      }),
      // (state) => ({ tasks: [...state.tasks, payload] }),
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
        item.title === payload.title ? { id: payload.id, title: payload.title, status: payload.status } : item),
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

export const useStore = create(
  subscribeWithSelector(log(persist(devtools(store), { name: 'store' })))
);

useStore.subscribe(
  (store) => store.tasks,
  (newTasks, prevTasks) => {
    useStore.setState({
      tasksInOngoing: newTasks.filter((item) => item.status === 'ONGOING')
        .length,
    });
  }
);

function RefTest() {
  const ref = useRef();

  useEffect(() => {
    useStore.subscribe(
      (store) => store.tasks,
      (tasks) => {
        ref.current = tasks;
      }
    );
  }, []);
}
