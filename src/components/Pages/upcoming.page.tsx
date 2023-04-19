import React from 'react';
import TodoList from '../Organisms/TodoList';
import { selectUpcomingTodos } from '../../Store/todosSelectors';

const UpcomingList = () => {
  return (
    <div className="mx-auto max-w-[1024px] lg:mt-[65px]">
      <div className="mb-4 text-center">Upcoming</div>
      <TodoList selector={selectUpcomingTodos} />
    </div>
  );
};

export default UpcomingList;
