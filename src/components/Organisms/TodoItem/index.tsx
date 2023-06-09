import React, { memo, useCallback, useRef, useState } from 'react';
import {
  motion,
  Reorder,
  useMotionValue,
  useDragControls,
} from 'framer-motion';
import { Todo } from '../../../Types/Todo';
import useRaisedShadow from '../../../utils/Hooks/useRaisedShadow';
import ButtonReorder from '../../Atoms/Buttons/ButtonReorder';
import ButtonDelete from '../../Atoms/Buttons/ButtonDelete';
import DateChanger from '../../Molecules/DateChanger';
import TodoLabel from '../../Atoms/TodoLabel';
import style from './style';
import TodoDetails from '../TodoDetails';
import useOnClickOutside from '../../../utils/Hooks/useOnClickOutside';

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

  const [detailsIsOpen, setDetailsIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setDetailsIsOpen(false));

  const handleOpenModal = useCallback(() => {
    setDetailsIsOpen(true);
  }, []);

  return (
    <Reorder.Item
      className={style.container}
      key={todo.id}
      dragListener={false}
      dragControls={controls}
      value={todo}
      style={{ boxShadow, y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <motion.div
        key={todo.dueDate}
        className={style.content}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <TodoLabel todo={todo} />
        <div className={style.buttonGroup}>
          <button onClick={handleOpenModal}>Open</button>
          <DateChanger todo={todo} />
          <ButtonReorder todosLength={todosLength} controls={controls} />
          <ButtonDelete
            isFirst={isFirstChild}
            isLast={isLastChild}
            id={todo.id}
          />
        </div>
      </motion.div>

      <TodoDetails
        todo={todo}
        isOpen={detailsIsOpen}
        setIsOpen={setDetailsIsOpen}
      />
    </Reorder.Item>
  );
};

export default memo(TodoItem);
