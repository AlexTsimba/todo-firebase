import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { Todo } from '../../../Types/Todo';
import { TODAY_DATE } from '../../../utils/Constatns';
import { addTodo } from '../../../Store/todosSlice';
import ButtonAdd from '../../Atoms/Buttons/ButtonAdd';
import InputAddTodo from '../../Atoms/Inputs/InputAddTodo';
import DatePicker from '../../Molecules/DatePicker';
import style from './style';

const AddTodoForm: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>(TODAY_DATE);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const dispatch = useDispatch();
  const animation = useAnimation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isSubmitted]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (input.length > 0) {
      const newTodo: Pick<Todo, 'name' | 'dueDate'> = { name: input, dueDate };
      dispatch(addTodo(newTodo));
      setIsSubmitted(true);

      await animation.start({ y: 90 });
      await animation.start({ opacity: 0 });
      await animation.start({ y: 0 });

      setInput('');
      setDueDate(TODAY_DATE);
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
      <InputAddTodo input={input} setInput={setInput} inputRef={inputRef} />
      {input && !isSubmitted && (
        <div
          className={classNames(
            'flex items-center gap-4',
            'absolute right-16 top-1/2',
            '-translate-y-1/2 transform'
          )}
        >
          <DatePicker dueDate={dueDate} setDueDate={setDueDate} />
          <ButtonAdd />
        </div>
      )}
    </motion.form>
  );
};

export default AddTodoForm;
