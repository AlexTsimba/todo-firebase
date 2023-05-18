import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../Types/Todo';
import {
  addTodoReducer,
  deleteTodoReducer,
  toggleCompleteReducer,
  reorderTodosReducer,
  changeDueDateReducer,
  updateTodoReducer,
} from './todosReducers';

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: addTodoReducer,
    deleteTodo: deleteTodoReducer,
    toggleComplete: toggleCompleteReducer,
    reorderTodos: reorderTodosReducer,
    changeDuedate: changeDueDateReducer,
    updateTodo: updateTodoReducer,
  },
});

export const {
  addTodo,
  deleteTodo,
  reorderTodos,
  toggleComplete,
  changeDuedate,
  updateTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
