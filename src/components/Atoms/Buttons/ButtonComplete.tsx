import React from 'react';
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import style from './style';
import { toggleComplete } from '../../../Store/todosSlice';

interface ButtonDeleteProps {
  id: string;
}

const ButtonComplete: React.FC<ButtonDeleteProps> = ({ id }) => {
  const dispatch = useDispatch();

  const handleTodoCompletion = (idToDelete: string) => {
    dispatch(toggleComplete({ id: idToDelete }));
  };

  return (
    <button
      className={classNames(
        style.button,
        // style.delete,
        'btn-success'
      )}
      onClick={() => handleTodoCompletion(id)}
    >
      Complete
    </button>
  );
};

export default ButtonComplete;
