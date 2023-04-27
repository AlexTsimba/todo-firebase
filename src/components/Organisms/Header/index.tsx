import React from 'react';
import HeaderPrimary from '../../Atoms/Headers/HeaderPrimary';
import StatusBar from '../../Atoms/StatusBar';
import style from './style';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <HeaderPrimary />
      <StatusBar />
    </header>
  );
};

export default Header;
