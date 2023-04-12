import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { Todo } from '../../../Types/Todo';
import { addTodo } from '../../../Store/todosSlice';
import ButtonAdd from '../../Atoms/Buttons/ButtonAdd';
import style from './style';

const AddTodoForm: React.FC = () => {
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
        className={style.input}
        type="text"
        placeholder="Add Todo:"
        value={input}
        onChange={handlInputChange}
        ref={inputRef}
      />
      {input && !isSubmitted && <ButtonAdd />}
    </motion.form>
  );
};

export default AddTodoForm;
