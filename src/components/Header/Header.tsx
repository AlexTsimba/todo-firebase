import React from 'react';
import Greeting from './Greeting/Greeting';
import StatusBar from './StatusBar/StatusBar';

const Header: React.FC = () => {
  return (
    <header className="my-10 flex justify-between">
      <Greeting />
      <StatusBar />
    </header>
  );
};

export default Header;
