import React, { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { addTodo } from '../../utils/Utils';

interface Props {
  todosLength: number;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  form: `flex justify-between gap-x-2`,
  input: `w-full border pl-6`,
  button: `border rounded-sm p-2 bg-slate-200 hover:bg-slate-300`,
};

const AddTodo: React.FC<Props> = ({ todosLength, setIsAdding }) => {
  const [input, setInput] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.length > 0) {
      const newTodo = {
        name: input,
        completed: false,
        order: todosLength,
      };

      addTodo(newTodo);
      setInput('');
      setIsAdding(true);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.input}
        placeholder="Add Todo"
        value={input}
        onChange={handlInputChange}
        ref={inputRef}
      />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default AddTodo;
