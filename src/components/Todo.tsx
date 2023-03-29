import React from 'react';
import { FiTrash } from 'react-icons/fi';
import classNames from 'classnames';
import { Todo } from '../Types/Todo';

const style = {
  item: `flex justify-center justify-between bg-white my-2 p-4 rounded-lg hover:bg-slate-300`,
  todo: `flex gap-4 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
};

interface Props {
  todo: Todo;
}

const TodoList: React.FC<Props> = ({ todo }) => {
  return (
    <li className={style.item}>
      <label
        className={classNames(style.todo, {
          [style.completed]: todo.completed,
        })}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          className={style.checkbox}
        />
        {todo.name}
      </label>
      <button>
        <FiTrash />
      </button>
    </li>
  );
};
export default TodoList;
