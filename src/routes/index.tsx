import { lazy, Suspense } from 'react';
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
const SearchPlace = lazy(() => import('@/pages/searchPlace'));

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: RouterPath.root,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: RouterPath.mypage,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MyPage />
          </Suspense>
        ),
      },
      {
        path: RouterPath.myMapSetting,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MyMapSetting />
          </Suspense>
        ),
      },
      {
        path: 'test',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Test />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: RouterPath.recommendMap,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RecommendMap />
      </Suspense>
    ),
  },
  {
    path: RouterPath.recommendAdd,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AddPlace />
      </Suspense>
    ),
  },
  {
    path: RouterPath.curationMap,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <CurationMap />
      </Suspense>
    ),
  },
  {
    path: RouterPath.curationAdd,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AddPlace />
      </Suspense>
    ),
  },
  {
    path: RouterPath.searchPlace(':keyword'),
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchPlace />
      </Suspense>
    ),
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

export const getDynamicPath = {
  kakaoCallback: (code: string) =>
    `${RouterPath.kakaoCallback}?code=${encodeURIComponent(code)}`, // 다이내믹 경로 생성을 위한 함수 추가
};
