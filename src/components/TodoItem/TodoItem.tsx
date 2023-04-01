import React, { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  Reorder,
} from 'framer-motion';
import { TbTrashX } from 'react-icons/tb';
import classNames from 'classnames';
import { Todo } from '../../Types/Todo';
import { toggleComplete } from '../../utils/Api';
import useRaisedShadow from '../../utils/Shadows';

const style = {
  item: `transition duration-300 ease-in-out my-4 flex justify-between rounded-lg bg-white p-4 shadow-lg font-sans text-xl font-md hover:bg-slate-50`,
  todo: `flex gap-12 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  button: `invisible group-hover:visible transition-delay-300 hover:scale-125 transform transition duration-300 ease-in-out hover:bg-yellow-400 rounded-full z-10`,
};

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => Promise<void>;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete }) => {
  const [completed, setCompleted] = useState<boolean>(todo.completed);

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleToggle = async () => {
    await toggleComplete(todo);
    setCompleted(!completed);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="group relative"
        key={todo.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Reorder.Item
          value={todo}
          id={todo.id}
          style={{ boxShadow, y }}
          className="relative"
        >
          <div className={style.item}>
            <label
              className={classNames(style.todo, {
                [style.completed]: completed,
              })}
            >
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={completed}
                className={style.checkbox}
              />
              {todo.name}
            </label>
            <button
              className={classNames(style.button)}
              onClick={() => onDelete(todo)}
            >
              <TbTrashX />
            </button>
          </div>
        </Reorder.Item>
      </motion.div>
    </AnimatePresence>
  );
};

export default TodoItem;
