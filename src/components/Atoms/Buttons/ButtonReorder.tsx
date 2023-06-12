import React from 'react';
import classNames from 'classnames';
import { DragControls } from 'framer-motion';

import { Bars3Icon } from '@heroicons/react/24/outline';
import style from './style';

interface ButtonReorderProps {
  controls: DragControls;
  todosLength: number;
}

const ButtonReorder: React.FC<ButtonReorderProps> = ({
  controls,
  todosLength,
}) => {
  if (todosLength < 2) {
    return null;
  }

  return (
    <button
      type="button"
      className={classNames(style.button, style.draggable)}
      onPointerDown={(e) => controls.start(e)}
    >
      <Bars3Icon className={style.icon} />
    </button>
  );
};

export default ButtonReorder;
