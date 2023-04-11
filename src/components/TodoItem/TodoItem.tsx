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
import useRaisedShadow from '../../utils/useRaisedShadow';
import { deleteTodo } from '../../Store/todosSlice';
import ButtonReorder from '../Atoms/Buttons/ButtonReorder';
import ButtonDelete from '../Atoms/Buttons/ButtonDelete';
import DatePicker from '../DatePicker/DatePicker';
import TodoCheckBox from '../Atoms/TodoCheckBox/TodoCheckBox';

const style = {
  item: ` group relative transition duration-300 ease-in-out my-2 flex justify-between p-4 font-sans text-xl font-md`,
  todo: ` flex gap-12 items-center`,
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

  const controls = useDragControls();
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <Reorder.Item
      id={todo.id}
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
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <TodoCheckBox todo={todo} />

        <div className="flex gap-4">
          <DatePicker todo={todo} />
          <ButtonReorder todosLength={todosLength} controls={controls} />
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
