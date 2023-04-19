import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Todo } from '../../../Types/Todo';
import { toggleComplete } from '../../../Store/todosSlice';
import './index.scss';

interface TodoLabelProps {
  todo: Todo;
}

const TodoLabel: React.FC<TodoLabelProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);
  const dispatch = useDispatch();

  const handleToggleComplete = (id: string) => {
    setIsChecked(true);
    setTimeout(() => {
      dispatch(toggleComplete({ id }));
    }, 1200);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleToggleComplete(todo.id);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex
    <div id="checkbox" onKeyDown={handleKeyPress} tabIndex={0}>
      <input
        id={todo.order.toString()}
        type="checkbox"
        onChange={() => handleToggleComplete(todo.id)}
        checked={isChecked}
      />
      <label htmlFor={todo.order.toString()}>{todo.name}</label>
    </div>
  );
};

export default memo(TodoLabel);
