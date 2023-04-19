import React, { useCallback } from 'react';
import { Reorder } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Todo } from '../../../Types/Todo';
import TodoItem from '../TodoItem';
import { reorderTodos } from '../../../Store/todosSlice';
import { RootState } from '../../../Store/store';

interface TodoListProps {
  selector: (state: RootState) => Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ selector }) => {
  const todos = useSelector(selector);
  const dispatch = useDispatch();

  const handleReorder = useCallback(
    (reorderedTodos: Todo[]) => {
      const updatedTodos = reorderedTodos.map((todo, index) => {
        return {
          ...todo,
          order: index,
        };
      });
      dispatch(reorderTodos(updatedTodos));
    },
    [dispatch]
  );

  return (
    <Reorder.Group axis="y" onReorder={handleReorder} values={todos}>
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
