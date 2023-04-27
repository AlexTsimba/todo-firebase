import React from 'react';
import { Outlet } from 'react-router-dom';

import ButtonBurger from '../Atoms/Buttons/ButtonBurger';
import Sidebar from '../Organisms/Sidebar';

const Layout = () => {
  return (
    <div className="drawer-mobile drawer bg-color-background">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <main
        id="main"
        className="drawer-content mx-auto mt-20 w-full min-w-[420px] max-w-[768px] px-6 transition duration-300 md:px-4 2xl:max-w-[1024px]"
      >
        <label
          htmlFor="my-drawer-2"
          className="absolute top-6 left-6 lg:hidden"
        >
          <ButtonBurger />
        </label>
        <Outlet />
      </main>
      <Sidebar />
    </div>
  );
};

export default Layout;
