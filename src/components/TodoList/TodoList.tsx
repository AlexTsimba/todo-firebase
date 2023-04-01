import React from 'react';
import { Reorder } from 'framer-motion';
import { Todo } from '../../Types/Todo';
import TodoItem from '../TodoItem/TodoItem';
import { deleteTodo, updateTodosOrder } from '../../utils/Api';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDeleteTodo = async (todo: Todo) => {
    deleteTodo(todo);
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const handleReorder = (reorderedTodos: Todo[]) => {
    const updatedTodos = reorderedTodos.map((todo, index) => {
      return {
        ...todo,
        order: index,
      };
    });
    setTodos(updatedTodos);
    updateTodosOrder(updatedTodos);
  };

  return (
    <Reorder.Group values={todos} onReorder={handleReorder}>
      {todos.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onDelete={handleDeleteTodo} />
        );
      })}
    </Reorder.Group>
  );
};

export default TodoList;
