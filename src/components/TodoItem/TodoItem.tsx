import React, { useState } from 'react';
import { motion, Reorder, useMotionValue } from 'framer-motion';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { Todo } from '../../Types/Todo';
import { toggleComplete } from '../../utils/Api';
import useRaisedShadow from '../../utils/Shadows';

const style = {
  item: ` group relative transition duration-300 ease-in-out my-2 flex justify-between p-4 font-sans text-xl font-md`,
  todo: ` flex gap-12 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  button: `invisible group-hover:visible transition-delay-300 hover:scale-125 transform transition duration-300 ease-in-out hover:bg-yellow-400 p-2 rounded-full`,
};

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => Promise<void>;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete }) => {
  const [completed, setCompleted] = useState<boolean>(todo.completed);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleToggleComplete = async () => {
    await toggleComplete(todo);
    setCompleted(!completed);
  };

  return (
    <Reorder.Item
      key={todo.id}
      value={todo}
      style={{ boxShadow, y }}
      className=" relative rounded-lg bg-[#dae0f5] shadow-md first:rounded-t-3xl last:rounded-b-3xl"
    >
      <motion.div
        className={classNames(style.item)}
        key={todo.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <label
          className={classNames(style.todo, {
            [style.completed]: completed,
          })}
        >
          <input
            type="checkbox"
            onChange={handleToggleComplete}
            checked={completed}
            className={style.checkbox}
          />
          {todo.name}
        </label>
        <button
          className={classNames(style.button)}
          onClick={() => onDelete(todo)}
        >
          <ArchiveBoxXMarkIcon className="h-6" />
        </button>
      </motion.div>
    </Reorder.Item>
  );
};

export default TodoItem;
