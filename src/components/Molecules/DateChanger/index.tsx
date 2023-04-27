import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Todo } from '../../../Types/Todo';
import { changeDuedate } from '../../../Store/todosSlice';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';
import ButtonDate from '../../Atoms/Buttons/ButtonDate';
import CalendarPopup from '../../Atoms/CalendarPopup';
import { getDateRelative } from '../../../utils/DateTimeFormat';

interface DateChangerProps {
  todo: Todo;
}

const DateChanger: React.FC<DateChangerProps> = ({ todo }) => {
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
      <ButtonDate
        onClick={setIsOpen}
        date={dueDate}
        isOpen={isOpen}
        format={getDateRelative}
      />
      <div className="absolute right-0 z-10">
        <CalendarPopup
          isOpen={isOpen}
          dueDate={dueDate}
          handleChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateChanger;
