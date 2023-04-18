import React from 'react';
import AddTodoForm from '../Organisms/AddTodoForm';
import Header from '../Organisms/Header';
import TodoList from '../Organisms/TodoList';

const Inbox = () => {
  return (
    <div className="mx-auto max-w-[1024px] lg:mt-[65px]">
      <Header />
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default Inbox;
