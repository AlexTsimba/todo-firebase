import React from 'react';
import { motion, Reorder, useMotionValue } from 'framer-motion';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Todo } from '../../Types/Todo';
import useRaisedShadow from '../../utils/Shadows';
import { deleteTodo, toggleComplete } from '../../redux/todosSlice';

const style = {
  item: ` group relative transition duration-300 ease-in-out my-2 flex justify-between p-4 font-sans text-xl font-md`,
  todo: ` flex gap-12 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  button: `invisible group-hover:visible transition-delay-300 hover:scale-125 transform transition duration-300 ease-in-out hover:bg-yellow-400 p-2 rounded-full`,
};

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleDeleteTodo = async (idToDelete: string) => {
    dispatch(deleteTodo({ id: idToDelete }));
  };

  const handleToggleComplete = (idToTogle: Pick<Todo, 'id'>) => {
    dispatch(toggleComplete(idToTogle));
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
            [style.completed]: todo.completed,
          })}
        >
          <input
            type="checkbox"
            onChange={() => handleToggleComplete(todo)}
            checked={todo.completed}
            className={style.checkbox}
          />
          {todo.name}
        </label>
        <button
          className={classNames(style.button)}
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <ArchiveBoxXMarkIcon className="h-6" />
        </button>
      </motion.div>
    </Reorder.Item>
  );
};

export default TodoItem;
