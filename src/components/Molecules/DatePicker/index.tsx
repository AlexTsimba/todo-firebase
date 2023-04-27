import React, { memo, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CalendarPopup from '../../Atoms/CalendarPopup';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
import { getDateMonthDay } from '../../../utils/DateTimeFormat';
import ButtonDate from '../../Atoms/Buttons/ButtonDate';

interface InputDateProps {
  dueDate: string;
  setDueDate: React.Dispatch<React.SetStateAction<string>>;
}

const DatePicker: React.FC<InputDateProps> = ({ dueDate, setDueDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootElement = document.getElementById('main');

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  const handleDatechange = useCallback(
    (date: string) => {
      setDueDate(date);
      setIsOpen(false);
    },
    [setDueDate, setIsOpen]
  );

  return (
    <div>
      <ButtonDate
        onClick={setIsOpen}
        date={dueDate}
        isOpen={isOpen}
        format={getDateMonthDay}
      />
      {rootElement &&
        createPortal(
          <div ref={wrapperRef} className="absolute top-[10%] right-[30%]">
            <CalendarPopup
              isOpen={isOpen}
              dueDate={dueDate}
              handleChange={handleDatechange}
            />
          </div>,
          rootElement
        )}
    </div>
  );
};

export default memo(DatePicker);
