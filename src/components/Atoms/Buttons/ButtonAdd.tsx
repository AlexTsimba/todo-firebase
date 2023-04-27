import React from 'react';
import classNames from 'classnames';

import { PlusIcon } from '@heroicons/react/24/outline';
import style from './style';

const ButtonAdd = () => {
  return (
    <button type="submit" className={classNames(style.button)}>
      <PlusIcon className={style.icon} />
    </button>
  );
};

export default ButtonAdd;
