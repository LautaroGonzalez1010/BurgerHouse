
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const MenuPage = lazy(() => import('../pages/menu/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
