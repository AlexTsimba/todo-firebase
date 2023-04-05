import { RootState } from '../../redux/store';

export const selectAllTodos = (state: RootState) => state.todos.todos;
export const selectPendingTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed === false);
