import React from 'react';
import Greeting from '../../Atoms/Greeting';
import StatusBar from '../../Atoms/StatusBar';
import style from './style';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Greeting />
      <StatusBar />
    </header>
  );
};

export default Header;
