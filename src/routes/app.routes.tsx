import { RouteProps } from 'react-router';

import Dashboard from '../pages';

const appRoutes: RouteProps[] = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

export default appRoutes;
