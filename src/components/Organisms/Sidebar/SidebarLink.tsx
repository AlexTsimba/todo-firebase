import classNames from 'classnames';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarLinkProps {
  path: string;
  description: string;
  count: number;
  icon: React.ElementType;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  path,
  description,
  count,
  icon: Icon,
}) => {
  return (
    <NavLink
      className={(navData) =>
        classNames(
          '300ms flex items-center justify-between rounded-lg bg-slate-100 py-2 px-4 text-md transition ease-in',
          {
            'bg-slate-100/50 shadow-md ': navData.isActive,
          }
        )
      }
      to={path}
    >
      <div className="flex items-center gap-2 lg:gap-4">
        <Icon className="h-4" />
        {description}
      </div>
      <div className=" rounded-md bg-color-input-background px-2 py-1 text-color-text-secondary">
        {count}
      </div>
    </NavLink>
  );
};

export default memo(SidebarLink);
