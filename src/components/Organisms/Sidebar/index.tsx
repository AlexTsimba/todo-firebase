import React from 'react';

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        className="drawer-overlay checked:opacity-0"
      />
      <ul className="menu w-80 bg-slate-50/30 p-4 text-base-content backdrop-blur-lg lg:ml-2 lg:h-[98vh] lg:place-self-center lg:rounded-lg">
        Sidebar content
        <li>Sidebar Item 1</li>
        <li>Sidebar Item 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
