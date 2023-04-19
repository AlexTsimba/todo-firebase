import React from 'react';
import AddTodoForm from '../Organisms/AddTodoForm';
import Header from '../Organisms/Header';
import TodoList from '../Organisms/TodoList';
import { selectPendingTodos } from '../../Store/todosSelectors';

const Inbox = () => {
  return (
    <div className="mx-auto max-w-[1024px] lg:mt-[65px]">
      <Header />
      <AddTodoForm />
      <TodoList selector={selectPendingTodos} />
    </div>
  );
};

export default Inbox;
