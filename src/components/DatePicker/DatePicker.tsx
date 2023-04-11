import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Todo } from '../../Types/Todo';
import { changeDuedate } from '../../Store/todosSlice';
import useOnClickOutside from '../../utils/useOnClickOutside';
import ButtonDate from '../Atoms/Buttons/ButtonDate';
import CalendarPopup from '../Atoms/CalendarPopup/CalendarPopup';

interface DatePickerProps {
  todo: Todo;
}

const DatePicker: React.FC<DatePickerProps> = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dueDate } = todo;
  const dispatch = useDispatch();

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  const handleDateChange = (date: string) => {
    dispatch(changeDuedate({ id: todo.id, dueDate: date }));

    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <ButtonDate onClick={setIsOpen} date={dueDate} isOpen={isOpen} />
      <CalendarPopup
        isOpen={isOpen}
        dueDate={dueDate}
        handleChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
