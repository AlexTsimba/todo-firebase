import React from 'react';
import style from './style';
import { getRelativeDate } from '../../../utils/Utils';

interface ButtonDateProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  isOpen: boolean;
}

const ButtonDate: React.FC<ButtonDateProps> = ({ onClick, date, isOpen }) => {
  return (
    <button className={style.button} onClick={() => onClick(!isOpen)}>
      {getRelativeDate(date)}
    </button>
  );
};

export default ButtonDate;
