import React, { memo } from 'react';
import {
  motion,
  Reorder,
  useMotionValue,
  useDragControls,
} from 'framer-motion';
import { Todo } from '../../../Types/Todo';
import useRaisedShadow from '../../../utils/Hooks/useRaisedShadow';
import ButtonReorder from '../../Atoms/Buttons/ButtonReorder';
import DateChanger from '../../Molecules/DateChanger';
import TodoLabel from '../../Atoms/TodoLabel';
import style from './style';
import TodoActions from '../../Molecules/TodoActions';

interface TodoItemProps {
  todo: Todo;
  index: number;
  todosLength: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, todosLength }) => {
  const isFirstChild = index === 0;
  const isLastChild = index === todosLength - 1;

  const controls = useDragControls();
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      className={style.container}
      value={todo}
      style={{ boxShadow, y }}
      key={todo.id}
      dragListener={false}
      dragControls={controls}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <motion.div
        className={style.content}
        key={todo.dueDate}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <TodoLabel todo={todo} />
        <div className={style.buttonGroup}>
          <DateChanger todo={todo} />
          <ButtonReorder todosLength={todosLength} controls={controls} />
          <TodoActions
            id={todo.id}
            isFirst={isFirstChild}
            isLast={isLastChild}
          />
        </div>
      </motion.div>
    </Reorder.Item>
  );
};

export default memo(TodoItem);
