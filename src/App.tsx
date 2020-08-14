import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import Preview from './components/Preview';
import Tutorial from './components/Tutorial';

//Redux
// import { Provider } from 'react-redux';

const ROUTE = {
  preview: {
    path: '/preview',
    component: Preview,
  },
  tutorial: {
    path: '/tutorial',
    component: Tutorial,
  },
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE.preview.path} component={ROUTE.preview.component} exact />
        <Route path={ROUTE.tutorial.path} component={ROUTE.tutorial.component} exact />
        <Route exact component={ROUTE.tutorial.component} />
      </Switch>
    </Router>
  );
}

export default App;
