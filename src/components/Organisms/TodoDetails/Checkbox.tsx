import React, { memo } from 'react';
import { Todo } from '../../../Types/Todo';

interface CheckboxProps {
  completed: boolean;
  updateDetails: (newDetails: Partial<Todo>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ completed, updateDetails }) => {
  const handleToggleCompletion = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    updateDetails({ completed: isChecked });
  };

  return (
    <input
      className="checkbox bg-color-background"
      type="checkbox"
      checked={completed}
      onChange={handleToggleCompletion}
    />
  );
};

export default memo(Checkbox);
