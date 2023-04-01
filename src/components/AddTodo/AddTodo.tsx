import React, { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { addTodo } from '../../utils/Utils';

interface Props {
  todosLength: number;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  form: `flex justify-between gap-x-2 relative`,
  input: `w-full pl-6 h-16 transition duration-500 ease-in-out rounded-lg text-xl pl-20 bg-gray-300 focus:bg-white focus:z-100`,
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

      await animation.start({ y: 100, opacity: 0 });
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
      transition={{ duration: 0.4, type: 'tween', ease: 'easeOut' }}
      onAnimationComplete={() => setIsSubmitted(false)}
    >
      <input
        type="text"
        className={style.input}
        placeholder="Add Todo"
        value={input}
        onChange={handlInputChange}
        ref={inputRef}
      />
      {input && !isSubmitted && (
        <button className={style.button} type="submit">
          <AiOutlinePlus size={20} />
        </button>
      )}
    </motion.form>
  );
};

export default AddTodo;
