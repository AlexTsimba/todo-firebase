import React from 'react';
import style from './style';

interface ButtonDateProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  format: (date: string) => string;
}

const ButtonDate: React.FC<ButtonDateProps> = ({ onClick, date, format }) => {
  const toggleDate = () => onClick((isOpen) => !isOpen);

  return (
    <button type="button" className={style.button} onClick={toggleDate}>
      {format(date)}
    </button>
  );
};

export default ButtonDate;
