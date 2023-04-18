import { createBrowserRouter } from 'react-router-dom';

import Inbox from '../components/Pages/Inbox.page';
import Layout from '../components/Pages/layout.page';

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
        element: <Inbox />,
        index: true,
      },
    ],
  },
]);

export default router;
