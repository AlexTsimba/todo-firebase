import React from 'react';

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import style from './style';

const ButtonBurger = () => {
  const toggleSidebar = () => document.getElementById('my-drawer-2')?.click();

  return (
    <button
      type="button"
      className={style.button}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <Bars3BottomLeftIcon className={style.icon} />
    </button>
  );
};

export default ButtonBurger;
