import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import Menu from '../components/Menu';
import Header from '../components/Header';

import appDashboard from './appDashboard.routes';

import { Container, Content } from './styles';

function Dashboard() {
  const router = useRouteMatch();
  return (
    <Container>
      <Menu />
      <Header />
      <Content>
        {appDashboard.map(({ component, exact, path }, i) => (
          <Route
            path={`${router.path}${path}`}
            component={component}
            key={i}
            exact={exact}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Dashboard;
