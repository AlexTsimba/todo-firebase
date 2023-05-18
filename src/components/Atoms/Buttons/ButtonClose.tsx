import React from 'react';
import classNames from 'classnames';

import { XMarkIcon } from '@heroicons/react/24/outline';
import style from './style';

interface ButtonCloseProps {
  onClose: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClose }) => {
  return (
    <button
      className={classNames(style.button)}
      type="button"
      onClick={onClose}
    >
      <XMarkIcon className={style.icon} />
    </button>
  );
};

export default ButtonClose;
