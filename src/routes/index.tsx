import { lazy } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { RouterPath } from './path';
import Test from '@/pages/home/test';

const Header = lazy(() => import('@/components/features/layout/header'));
const HomePage = lazy(() => import('@/pages/home'));
const MyMapSetting = lazy(() => import('@/pages/my-map-setting'));
const MyPage = lazy(() => import('@/pages/mypage'));
const RecommendMap = lazy(() => import('@/pages/recommendMap'));
const CurationMap = lazy(() => import('@/pages/curationMap'));
const AddPlace = lazy(() => import('@/pages/addPlace'));

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
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: RouterPath.recommendMap,
    element: <RecommendMap />,
  },
  {
    path: RouterPath.recommendAdd,
    element: <AddPlace />,
  },
  {
    path: RouterPath.curationMap,
    element: <CurationMap />,
  },
  {
    path: RouterPath.curationAdd,
    element: <AddPlace />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
