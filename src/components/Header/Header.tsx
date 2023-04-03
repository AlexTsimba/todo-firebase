import React from 'react';
import Greeting from './Greeting/Greeting';
import StatusBar from './StatusBar/StatusBar';

interface Props {
  pendingTodos: number;
}

const Header: React.FC<Props> = ({ pendingTodos }) => {
  return (
    <header className="my-10 flex justify-between">
      <Greeting />
      <StatusBar pendingTodos={pendingTodos} />
    </header>
  );
};

export default Header;
