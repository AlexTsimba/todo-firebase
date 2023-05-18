import { createBrowserRouter } from 'react-router-dom';

import Inbox from '../components/Templates/Inbox';
import Layout from '../components/Layout/layout.page';
import CompletedList from '../components/Templates/Completed';
import TodayList from '../components/Templates/Today';
import UpcomingList from '../components/Templates/Upcoming';

const router = createBrowserRouter([
  {
    path: '/todo-firebase',
    element: <Layout />,
    children: [
      {
        element: <Inbox />,
        index: true,
      },
      {
        path: '/completed',
        element: <CompletedList />,
      },
      {
        path: '/today',
        element: <TodayList />,
      },
      {
        path: '/upcoming',
        element: <UpcomingList />,
      },
    ],
  },
]);

export default router;
