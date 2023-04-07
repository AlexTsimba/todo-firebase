import React from 'react';
import classNames from 'classnames';
import { DragControls } from 'framer-motion';

import { Bars3Icon } from '@heroicons/react/24/outline';
import style from './style';

interface ButtonDragProps {
  controls: DragControls;
}

const ButtonDrag: React.FC<ButtonDragProps> = ({ controls }) => {
  return (
    <button
      className={classNames(style.button, style.draggable)}
      onPointerDown={(e) => controls.start(e)}
    >
      <Bars3Icon className={style.icon} />
    </button>
  );
};

export default ButtonDrag;
