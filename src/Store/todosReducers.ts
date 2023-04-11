/* eslint-disable no-param-reassign */
import { nanoid } from 'nanoid';
import { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../Types/Todo';

export const addTodoReducer = (
  state: { todos: Todo[] },
  action: PayloadAction<{ name: string }>
) => {
  const newTodo = {
    name: action.payload.name,
    order: state.todos.length,
    completed: false,
    id: nanoid(),
    dueDate: new Date().toDateString(),
  };
  state.todos.unshift(newTodo);
};

export const deleteTodoReducer = (
  state: { todos: Todo[] },
  action: PayloadAction<Pick<Todo, 'id'>>
) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
};

export const toggleCompleteReducer = (
  state: { todos: Todo[] },
  action: PayloadAction<{ id: string }>
) => {
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
};

export const reorderTodosReducer = (
  state: { todos: Todo[] },
  action: PayloadAction<Todo[]>
) => {
  state.todos = action.payload;
};

export const changeDueDateReducer = (
  state: { todos: Todo[] },
  action: PayloadAction<Pick<Todo, 'id' | 'dueDate'>>
) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        dueDate: action.payload.dueDate,
      };
    }
    return {
      ...todo,
    };
  });
};
