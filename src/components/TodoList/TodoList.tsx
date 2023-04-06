import React from 'react';
import { Reorder } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../../Types/Todo';
import TodoItem from '../TodoItem/TodoItem';
import { selectAllTodos } from '../../redux/todosSelectors';
import { reorderTodos } from '../../redux/todosSlice';

const TodoList: React.FC = () => {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();

  const handleReorder = (reorderedTodos: Todo[]) => {
    const updatedTodos = reorderedTodos.map((todo, index) => {
      return {
        ...todo,
        order: index,
      };
    });
    dispatch(reorderTodos(updatedTodos));
  };

  return (
    <Reorder.Group axis="y" values={todos} onReorder={handleReorder}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Reorder.Group>
  );
};

export default TodoList;
