import React from 'react';
import {
  motion,
  Reorder,
  useMotionValue,
  useDragControls,
} from 'framer-motion';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Todo } from '../../Types/Todo';
import useRaisedShadow from '../../utils/Shadows';
import { deleteTodo, toggleComplete } from '../../Store/todosSlice';
import ButtonDrag from '../Buttons/ButtonDrag';
import ButtonDelete from '../Buttons/ButtonDelete';

const style = {
  item: ` group relative transition duration-300 ease-in-out my-2 flex justify-between p-4 font-sans text-xl font-md`,
  todo: ` flex gap-12 items-center`,
  completed: `line-through text-grey-500`,
  checkbox: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300`,
  hide: `invisible group-hover:visible`,
  button: `transition-delay-300 hover:scale-125 transform transition duration-300 ease-in-out hover:bg-primary-button py-2 px-4 rounded-lg`,
};

interface TodoItemProps {
  todo: Todo;
  index: number;
  todosLength: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, todosLength }) => {
  const isFirstChild = index === 0;
  const isLastChild = index === todosLength - 1;
  const dispatch = useDispatch();

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo({ id }));
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete({ id }));
  };
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={todo.id}
      dragListener={false}
      dragControls={controls}
      value={todo}
      style={{ boxShadow, y }}
      className="relative rounded-lg bg-[#F2F5F9] shadow-md first:rounded-t-3xl last:rounded-b-3xl"
    >
      <motion.div
        className={classNames(style.item)}
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
            onChange={() => handleToggleComplete(todo.id)}
            checked={todo.completed}
            className={style.checkbox}
          />
          {todo.name}
        </label>

        <div className="flex gap-4">
          {todosLength > 1 && <ButtonDrag controls={controls} />}
          <ButtonDelete
            isFirst={isFirstChild}
            isLast={isLastChild}
            onDelete={handleDeleteTodo}
            id={todo.id}
          />
        </div>
      </motion.div>
    </Reorder.Item>
  );
};

export default TodoItem;
