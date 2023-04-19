import { createBrowserRouter } from 'react-router-dom';

import Inbox from '../components/Pages/Inbox.page';
import Layout from '../components/Pages/layout.page';
import CopmletedList from '../components/Pages/completed.page';
import TodayList from '../components/Pages/today.page';
import UpcomingList from '../components/Pages/upcoming.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Inbox />,
        index: true,
      },
      {
        path: '/completed',
        element: <CopmletedList />,
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
