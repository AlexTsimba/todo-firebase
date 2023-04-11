import React from 'react';
import Greeting from '../Atoms/Greeting';
import StatusBar from '../Atoms/StatusBar';

const Header: React.FC = () => {
  return (
    <header className="my-10 flex justify-between">
      <Greeting />
      <StatusBar />
    </header>
  );
};

export default Header;
