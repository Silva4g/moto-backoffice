import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import appRoutes from "./routes/app.routes";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <Router>
    {appRoutes.map(({ component, exact, path }, i) => (
      <Route path={path} component={component} key={i} exact={exact} />
    ))}
    <GlobalStyle />
  </Router>
);

export default App;
