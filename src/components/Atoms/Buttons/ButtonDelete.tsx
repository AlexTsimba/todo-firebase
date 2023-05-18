import React from 'react';
import classNames from 'classnames';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import style from './style';
import { deleteTodo } from '../../../Store/todosSlice';

interface ButtonDeleteProps {
  id: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ id, isFirst, isLast }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (idToDelete: string) => {
    dispatch(deleteTodo({ id: idToDelete }));
  };

  return (
    <button
      className={classNames(
        style.button,
        // style.groupHover,
        { [style.roundTopRight]: isFirst },
        { [style.roundBototmRight]: isLast }
      )}
      onClick={() => handleDeleteTodo(id)}
    >
      <XMarkIcon className={style.icon} />
    </button>
  );
};

ButtonDelete.defaultProps = {
  isFirst: false,
  isLast: false,
};

export default ButtonDelete;
