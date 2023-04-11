import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Store/todosSlice';
import { Todo } from '../../Types/Todo';
import ButtonAdd from '../Atoms/Buttons/ButtonAdd';

const style = {
  form: `mb-20 flex justify-between gap-x-2 relative`,
  input: `shadow-xl w-full h-16 transition duration-500 ease-in-out rounded-3xl text-xl pl-20 pr-20 bg-slate-300 focus:bg-[#F2F5F9] placeholder-slate-700 border-none focus:outline-none focus:placeholder-gray-600`,
  button: `px-4 py-2 rounded-lg  bg-slate-200 hover:bg-slate-300 absolute right-4 top-1/2 transform -translate-y-1/2 transition duration-300 ease-in-out z-10`,
};

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch();

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
      const newTodo: Pick<Todo, 'name'> = { name: input };
      dispatch(addTodo(newTodo));
      setIsSubmitted(true);
      await animation.start({ y: 142 });
      await animation.start({ opacity: 0 });
      await animation.start({ y: 0 });
      setInput('');
      await animation.start({ opacity: 1 });
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
      {input && !isSubmitted && <ButtonAdd />}
    </motion.form>
  );
};

export default AddTodo;
