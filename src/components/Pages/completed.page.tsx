import React from 'react';
import TodoList from '../Organisms/TodoList';
import { selectCompletedTodos } from '../../Store/todosSelectors';

const CopmletedList = () => {
  return (
    <div className="mx-auto max-w-[1024px] lg:mt-[65px]">
      <div className="mb-4 text-center">Completed</div>
      <TodoList selector={selectCompletedTodos} />
    </div>
  );
};

export default CopmletedList;
