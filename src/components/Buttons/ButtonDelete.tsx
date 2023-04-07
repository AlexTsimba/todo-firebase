import React from 'react';
import classNames from 'classnames';

import { XMarkIcon } from '@heroicons/react/24/outline';
import style from './style';

interface ButtonDeleteProps {
  onDelete: (id: string) => void;
  id: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({
  onDelete,
  id,
  isFirst,
  isLast,
}) => {
  return (
    <button
      className={classNames(
        style.button,
        style.groupHover,
        { [style.roundTopRight]: isFirst },
        { [style.roundBototmRight]: isLast }
      )}
      onClick={() => onDelete(id)}
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
