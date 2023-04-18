import { Outlet } from 'react-router-dom';
import React from 'react';
import ButtonMenu from '../Atoms/Buttons/ ButtonMenu';
import Sidebar from '../Organisms/Sidebar';

const Layout = () => {
  return (
    <div className="bg-color-background">
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content flex flex-col items-start">
          <label htmlFor="my-drawer-2" className="m-4 lg:hidden">
            <ButtonMenu />
          </label>
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
