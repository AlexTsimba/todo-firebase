import React, { memo, useCallback } from 'react';
import {
  motion,
  Reorder,
  useMotionValue,
  useDragControls,
} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { Todo } from '../../../Types/Todo';
import useRaisedShadow from '../../../utils/Hooks/useRaisedShadow';
import { deleteTodo } from '../../../Store/todosSlice';
import ButtonReorder from '../../Atoms/Buttons/ButtonReorder';
import ButtonDelete from '../../Atoms/Buttons/ButtonDelete';
import DatePicker from '../../Molecules/DatePicker';
import TodoLabel from '../../Atoms/TodoLabel';
import style from './style';

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

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodo({ id: todo.id }));
  }, [dispatch, todo.id]);

  return (
    <Reorder.Item
      className={style.container}
      id={todo.id}
      key={todo.id}
      dragListener={false}
      dragControls={controls}
      value={todo}
      style={{ boxShadow, y }}
    >
      <motion.div
        className={style.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <TodoLabel todo={todo} />

        <div className={style.buttonGroup}>
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

export default memo(TodoItem);
