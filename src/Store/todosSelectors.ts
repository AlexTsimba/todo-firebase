import { RootState } from './store';

export const selectAllTodos = (state: RootState) => state.todos.todos;

export const selectPendingTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed === false);

export const selectCompletedTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed);

export const selectTodayTodos = (state: RootState) => {
  const today = new Date().toDateString();
  return state.todos.todos.filter((todo) => todo.dueDate === today && todo.completed === false);
};

export const selectUpcomingTodos = (state: RootState) => {
  const today = new Date().toDateString();
  return state.todos.todos.filter((todo) => todo.dueDate !== today && todo.completed === false);
};
