import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const MenuPage = lazy(() => import('../pages/menu/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'menu', // sin slash ✔️
    element: <MenuPage />,
  },
  {
    path: '*', // 🔥 IMPORTANTE
    element: <HomePage />, // fallback limpio
  },
];

export default routes;