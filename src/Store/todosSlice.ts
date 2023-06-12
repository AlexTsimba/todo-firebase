import { createSlice } from '@reduxjs/toolkit';
import { TodosState } from '../Types/TodosState';
import {
  addTodoReducer,
  deleteTodoReducer,
  toggleCompleteReducer,
  reorderTodosReducer,
  changeDueDateReducer,
  updateTodoReducer,
  setSelectedTodoIdReducer,
  setEditingTodoIdReducer,
} from './todosReducers';


const initialState: TodosState = {
  todos: [],
  editingTodoId: null,
  selectedTodoId: null,
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
    setSelectedTodoId: setSelectedTodoIdReducer,
    setEditingTodoId: setEditingTodoIdReducer,
  },
});

export const {
  addTodo,
  deleteTodo,
  reorderTodos,
  toggleComplete,
  changeDuedate,
  updateTodo,
  setSelectedTodoId,
  setEditingTodoId,
} = todosSlice.actions;

export default todosSlice.reducer;
