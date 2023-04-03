import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { motion, useAnimation } from 'framer-motion';
import { addTodo } from '../../utils/Api';

interface Props {
  todosLength: number;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  form: `mb-20 flex justify-between gap-x-2 relative`,
  input: `shadow-xl w-full h-16 transition duration-500 ease-in-out rounded-3xl text-xl pl-20 pr-20 dsabg-zinc-200 focus:bg-[#dae0f5] placeholder-slate-300 border-none focus:outline-none focus:placeholder-gray-600`,
  button: `px-4 py-2 rounded-lg  bg-slate-200 hover:bg-slate-300 absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 ease-in-out z-10 pointer-events-all`,
};

const AddTodo: React.FC<Props> = ({ todosLength, setIsAdding }) => {
  const [input, setInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const animation = useAnimation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isSubmitted]);

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

      setIsAdding(true);
      setIsSubmitted(true);

      await animation.start({ y: 142 });
      await animation.start({ opacity: 0 });
      await animation.start({ y: 0 });
      animation.start({ opacity: 1 });

      setInput('');
    }
  };

  return (
    <motion.form
      className={style.form}
      onSubmit={handleSubmit}
      initial={{ y: 0, opacity: 1 }}
      animate={animation}
      transition={{ duration: 0.2 }}
      onAnimationComplete={() => setIsSubmitted(false)}
    >
      <input
        type="text"
        className={style.input}
        placeholder="Add Todo:"
        value={input}
        onChange={handlInputChange}
        ref={inputRef}
      />
      {input && !isSubmitted && (
        <button className={style.button} type="submit">
          <PlusIcon className="h-6" />
        </button>
      )}
    </motion.form>
  );
};

export default AddTodo;
