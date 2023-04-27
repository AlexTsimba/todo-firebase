import React from 'react';
import TodoList from '../Organisms/TodoList';
import { selectUpcomingTodos } from '../../Store/todosSelectors';
import HeaderSecondary from '../Atoms/Headers/HeaderSecondary';

const TodayList = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-[110px]">
      <HeaderSecondary title="Upcoming" />
      <TodoList selector={selectUpcomingTodos} />
    </div>
  );
};

export default TodayList;
