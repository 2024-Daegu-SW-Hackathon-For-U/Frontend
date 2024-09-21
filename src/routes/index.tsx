import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import Header from '@/components/features/layout/header';
import HomePage from '@/pages/home';
import MyMapSetting from '@/pages/my-map-setting';
import MyPage from '@/pages/mypage';

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
      {
        path: RouterPath.myMapSetting,
        element: <MyMapSetting />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
