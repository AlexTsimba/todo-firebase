import React from 'react';
import { Reorder } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../../Types/Todo';
import TodoItem from '../TodoItem/TodoItem';
import { selectAllTodos } from '../../Store/todosSelectors';
import { reorderTodos } from '../../Store/todosSlice';

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
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            todosLength={todos.length}
          />
        );
      })}
    </Reorder.Group>
  );
};

export default TodoList;
