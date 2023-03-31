import React, { useState } from 'react';
import { TbTrashX } from 'react-icons/tb';
import classNames from 'classnames';
import { Reorder, useMotionValue } from 'framer-motion';
import { Todo } from '../../Types/Todo';
import { toggleComplete } from '../../utils/Utils';
import useRaisedShadow from '../../utils/use-raized-shadow';

const style = {
  item: `transition duration-300 ease-in-out my-2 flex justify-between rounded-l bg-white px-8 py-4 shadow-lg font-sans text-xl font-md hover:bg-slate-50`,
  todo: `flex gap-4 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  button: `invisible group-hover:visible transition-delay-300 hover:scale-125 transform transition duration-300 ease-in-out hover:bg-yellow-400 rounded-full p-2 z-10`,
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
    <Reorder.Item
      className="group relative"
      value={todo}
      id={todo.id}
      style={{ boxShadow, y }}
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
  );
};

export default TodoItem;
