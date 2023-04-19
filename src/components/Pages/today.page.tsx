import React from 'react';
import TodoList from '../Organisms/TodoList';
import { selectTodayTodos } from '../../Store/todosSelectors';

const TodayList = () => {
  return (
    <div className="mx-auto max-w-[1024px] lg:mt-[65px]">
      <div className="mb-4 text-left">Today</div>
      <TodoList selector={selectTodayTodos} />
    </div>
  );
};

export default TodayList;
