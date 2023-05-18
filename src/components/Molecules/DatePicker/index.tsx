import React, { memo, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CalendarPopup from '../../Atoms/CalendarPopup';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
import { getDateMonthDay } from '../../../utils/DateTimeFormat';
import ButtonDate from '../../Atoms/Buttons/ButtonDate';

interface InputDateProps {
  dueDate: string;
  setDueDate: (date: string) => void;
  parent: string;
}

const DatePicker: React.FC<InputDateProps> = ({
  dueDate,
  setDueDate,
  parent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentElement = document.getElementById(parent);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  const handleDatechange = useCallback(
    (date: object) => {
      setDueDate(date.toString());
      setIsOpen(false);
    },
    [setDueDate, setIsOpen]
  );

  return (
    <div>
      <ButtonDate onClick={setIsOpen} date={dueDate} format={getDateMonthDay} />
      {parentElement &&
        createPortal(
          <div ref={wrapperRef} className="absolute top-[10%] right-[30%]">
            <CalendarPopup
              isOpen={isOpen}
              dueDate={dueDate}
              handleChange={handleDatechange}
            />
          </div>,
          parentElement
        )}
    </div>
  );
};

export default memo(DatePicker);
