import React, { memo } from 'react';
import { Todo } from '../../../Types/Todo';

interface DescriptionProps {
  description: string;
  updateDetails: (newDetails: Partial<Todo>) => void;
}

const Description: React.FC<DescriptionProps> = ({
  description,
  updateDetails,
}) => {
  const handleDescInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget.value;
    updateDetails({ description: input });
  };

  return (
    <textarea
      className="rounded-lg p-2"
      name="description"
      placeholder="Write a note..."
      onChange={handleDescInput}
      value={description}
      cols={30}
      rows={10}
    />
  );
};

export default memo(Description);
