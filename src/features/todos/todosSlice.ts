/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Todo } from '../../Types/Todo';

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
    addTodo: (state, action) => {
      const newTodo: Todo = {
        name: action.payload.name,
        order: state.todos.length,
        completed: false,
        id: nanoid(),
      };
      state.todos.push(newTodo);
    },

    updateTodosOrder: (state, action: PayloadAction<Todo> ) => {
      state.todos.forEach((todo, index) => {
        if (todo.id !== action.payload.id) {
          state.todos[index] = { ...todo, order: index };
        }
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return {
          ...todo,
        };
      });
    },
    
    reorderTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodosOrder,
  reorderTodos,
  toggleComplete,
} = todosSlice.actions;

export default todosSlice.reducer;
