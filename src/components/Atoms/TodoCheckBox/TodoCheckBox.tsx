import React from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import { Todo } from '../../../Types/Todo';
import { toggleComplete } from '../../../Store/todosSlice';

interface TodoCheckBoxProps {
  todo: Todo;
}

const TodoCheckBox: React.FC<TodoCheckBoxProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete({ id }));
  };

  return (
    <div id="checkbox">
      <input
        id={todo.id}
        type="checkbox"
        onChange={() => handleToggleComplete(todo.id)}
        checked={todo.completed}
      />
      <label htmlFor={todo.id}>{todo.name}</label>
    </div>
  );
};

export default TodoCheckBox;
