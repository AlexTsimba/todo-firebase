import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import classNames from 'classnames';
import { Reorder } from 'framer-motion';
import { Todo } from '../Types/Todo';
import { toggleComplete } from '../utils/Utils';

const style = {
  item: `transition duration-300 ease-in-out group item flex justify-center justify-between bg-white my-2 px-8 py-4 rounded-lg hover:bg-slate-300 shadow-lg`,
  todo: `flex gap-4 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  button: `group item invisible hover:scale-125 transform transition duration-300 ease-in-out hover:bg-yellow-400 rounded-full p-4`,
  visible: `group-hover:item:visible`,
};

interface Props {
  todo: Todo;
  onDelete: (todo: Todo) => Promise<void>;
}

const TodoItem: React.FC<Props> = ({ todo, onDelete }) => {
  const [completed, setCompleted] = useState<boolean>(todo.completed);

  const handleToggle = async () => {
    await toggleComplete(todo);
    setCompleted(!completed);
  };

  return (
    <Reorder.Item
      className="item my-2 flex justify-center rounded-l bg-white px-8 py-4 shadow-lg"
      key={todo.id}
      id={todo.id}
      value={todo}
    >
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
        className={classNames(
          style.button,
          style.visible,
          'group-hover:visible'
        )}
        onClick={() => onDelete(todo)}
      >
        <FiTrash />
      </button>
    </Reorder.Item>
  );
};

export default TodoItem;
