import { Todo } from './Todo';

export interface TodosState {
  todos: Todo[];
  editingTodoId: string | null;
  selectedTodoId: string | null;
}