import React, { memo, useRef, useEffect, useState } from 'react';
import { Todo } from '../../../Types/Todo';

interface TodoNameProps {
  name: string;
  updateDetails: (newDetails: Partial<Todo>) => void;
}

const TodoName: React.FC<TodoNameProps> = ({ name, updateDetails }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleNameInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const input = e.currentTarget.value.replace(/\n/g, ''); // Remove line breaks
    updateDetails({ name: input });
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScrollHeight(event.currentTarget.scrollHeight);
    handleNameInput(event);
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setScrollHeight(e.currentTarget.scrollHeight);
  };

  useEffect(() => {
    if (inputRef.current) {
      setScrollHeight(inputRef.current.scrollHeight);
    }
  }, [name]);

  return (
    <textarea
      className="h-8 max-h-80 resize-none bg-transparent text-lg font-semibold leading-tight outline-none"
      spellCheck={false}
      onFocus={handleFocus}
      ref={inputRef}
      value={name}
      onChange={handleNameChange}
      style={{ height: scrollHeight }}
    />
  );
};

export default memo(TodoName);
