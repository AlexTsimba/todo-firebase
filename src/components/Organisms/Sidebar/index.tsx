import {
  InboxIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectPendingTodos,
  selectCompletedTodos,
  selectTodayTodos,
  selectUpcomingTodos,
} from '../../../Store/todosSelectors';
import SidebarLink from './SidebarLink';
import TodayDate from '../../Atoms/TodayDate';

const Sidebar = () => {
  const inboxCount = useSelector(selectPendingTodos).length;
  const completedCount = useSelector(selectCompletedTodos).length;
  const todayCount = useSelector(selectTodayTodos).length;
  const upcomingCount = useSelector(selectUpcomingTodos).length;

  return (
    <aside className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay" />
      <nav className="menu w-80 gap-2 bg-white/30 p-4 text-base-content backdrop-blur-lg lg:ml-2 lg:h-[98vh] lg:place-self-center lg:rounded-lg">
        <TodayDate />
        <div className="divider mx-4 mb-2 mt-0" />

        <SidebarLink
          path="/"
          description="Inbox"
          count={inboxCount}
          icon={InboxIcon}
        />
        <SidebarLink
          path="/today"
          description="Today"
          count={todayCount}
          icon={StarIcon}
        />
        <SidebarLink
          path="/upcoming"
          description="Upcoming"
          count={upcomingCount}
          icon={CalendarDaysIcon}
        />
        <SidebarLink
          path="/completed"
          description="Completed"
          count={completedCount}
          icon={CheckCircleIcon}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
