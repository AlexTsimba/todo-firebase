import { RootState } from './store';
import { TODAY_DATE } from '../utils/Constatns';

export const selectAllTodos = (state: RootState) => state.todos.todos;

export const selectPendingTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed === false);

export const selectCompletedTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed);

export const selectTodayTodos = (state: RootState) => {
  return state.todos.todos.filter(
    (todo) => todo.dueDate === TODAY_DATE && todo.completed === false
  );
};

export const selectUpcomingTodos = (state: RootState) => {
  const today = new Date();

  return state.todos.todos.filter((todo) => {
    const dueDate = new Date(todo.dueDate);
    return dueDate.getTime() > today.getTime() && !todo.completed;
  });
};
