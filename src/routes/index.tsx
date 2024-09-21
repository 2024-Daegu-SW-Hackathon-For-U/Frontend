import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import Header from '@/components/features/layout/header';
import CurationMap from '@/pages/curationMap';
import HomePage from '@/pages/home';
import MyPage from '@/pages/mypage';
import RecommendMap from '@/pages/recommendMap';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: RouterPath.root,
        element: <HomePage />,
      },
      {
        path: RouterPath.mypage,
        element: <MyPage />,
      },
    ],
  },
  {
    path: RouterPath.recommendMap,
    element: <RecommendMap />,
  },
  {
    path: RouterPath.curationMap,
    element: <CurationMap />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
