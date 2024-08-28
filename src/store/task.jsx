import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  isShowModal: false,
  taskId: null,
  setTaskId: (taskId = null) => set({ taskId }),
  showModal: () =>
    set((state) => ({
      isShowModal: !state.isShowModal,
    })),
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
      isShowModal: !state.isShowModal,
      searchTerm: "",
    })),
  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
      taskId: null,
      isShowModal: !state.isShowModal,
      searchTerm: "",
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  searchTerm: "",
  setSearchTerm: (searchTerm) =>
    set((state) => ({
      searchTerm: searchTerm,
    })),
  clearCompleted: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.completed),
    })),
}));

export default useTaskStore;
