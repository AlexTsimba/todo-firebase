import React from 'react';
import style from './style';

interface ButtonDateProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  isOpen: boolean;
  format: (date: string) => string;
}

const ButtonDate: React.FC<ButtonDateProps> = ({
  onClick,
  date,
  isOpen,
  format,
}) => {
  return (
    <button
      type="button"
      className={style.button}
      onClick={() => onClick(!isOpen)}
    >
      {format(date)}
    </button>
  );
};

export default ButtonDate;
