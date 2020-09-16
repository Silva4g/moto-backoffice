import { RouteProps } from 'react-router';

import Dashboard from './Dashboard';
import Propostas from './Propostas';
import Anuncio from './Anuncio';
import Estoque from './Estoque';
import Relatorios from './Relatorios';
import PlanosProdutos from './PlanosProdutos';
import Nitro from './Nitro';

const appDashboard: RouteProps[] = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/proposta',
    component: Propostas,
  },
  {
    path: '/anuncio',
    component: Anuncio,
    exact: true,
  },
  {
    path: '/estoque',
    component: Estoque,
    exact: true,
  },
  {
    path: '/relatorio',
    component: Relatorios,
    exact: true,
  },
  {
    path: '/planos',
    component: PlanosProdutos,
    exact: true,
  },
  {
    path: '/nitro',
    component: Nitro,
    exact: true,
  },
];

export default appDashboard;
