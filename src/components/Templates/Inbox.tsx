import React from 'react';
import AddTodoForm from '../Organisms/AddTodoForm';
import Header from '../Organisms/Header';
import TodoList from '../Organisms/TodoList';
import { selectPendingTodos } from '../../Store/todosSelectors';

const Inbox = () => {
  return (
    <>
      <Header />
      <AddTodoForm />
      <TodoList selector={selectPendingTodos} />
    </>
  );
};

export default Inbox;
