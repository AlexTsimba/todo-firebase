import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Todo } from '../../../Types/Todo';
import { toggleComplete } from '../../../Store/todosSlice';
import './index.scss';

interface TodoLabelProps {
  todo: Todo;
}

const TodoLabel: React.FC<TodoLabelProps> = ({ todo }) => {
  const { completed, order, name, id } = todo;

  const [isChecked, setIsChecked] = useState(completed);
  const dispatch = useDispatch();

  const handleToggleComplete = (todoId: string) => {
    setIsChecked(true);
    setTimeout(() => {
      dispatch(toggleComplete({ id: todoId }));
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
        id={order.toString()}
        type="checkbox"
        onChange={() => handleToggleComplete(id)}
        checked={isChecked}
      />
      <label htmlFor={order.toString()}>
        <h2 className=".. truncate">{name}</h2>
      </label>
    </div>
  );
};

export default memo(TodoLabel);
