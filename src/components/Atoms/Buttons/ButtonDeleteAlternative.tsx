import React, { memo } from 'react';
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import style from './style';
import { deleteTodo } from '../../../Store/todosSlice';

interface ButtonDeleteProps {
  id: string;
}

const ButtonDeleteAlternative: React.FC<ButtonDeleteProps> = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (idToDelete: string) => {
    dispatch(deleteTodo({ id: idToDelete }));
  };

  return (
    <button
      className={classNames(style.button, style.delete)}
      onClick={() => handleDeleteTodo(id)}
    >
      Delete
    </button>
  );
};

export default memo(ButtonDeleteAlternative);
