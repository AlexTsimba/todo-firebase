import React from 'react';

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import style from './style';

const ButtonMenu = () => {
  return (
    <button
      type="button"
      className={style.button}
      onClick={() => document.getElementById('my-drawer-2')?.click()}
    >
      <Bars3BottomLeftIcon className={style.icon} />
    </button>
  );
};

export default ButtonMenu;
