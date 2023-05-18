import React, { memo } from 'react';
import DatePicker from '../../Molecules/DatePicker';
import { Todo } from '../../../Types/Todo';

interface DueDateProps {
  dueDate: string;
  updateDetails: (newDetails: Partial<Todo>) => void;
}

const DueDate: React.FC<DueDateProps> = ({ dueDate, updateDetails }) => {
  const parentId = 'todoDetails';

  const handleDateChange = (theDate: string) => {
    updateDetails({ dueDate: theDate });
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-2">
      <div className="flex items-center justify-around">
        <span>Due date:</span>
        <DatePicker
          dueDate={dueDate}
          setDueDate={handleDateChange}
          parent={parentId}
        />
      </div>
    </div>
  );
};

export default memo(DueDate);
