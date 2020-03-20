import React, { lazy } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Wrapper from './wrapper/Wrapper';
import Loader from './Loader';

// main
const Dashboard = lazy(() => import('./menu/Dashboard'));
const Services = lazy(() => import('./menu/Services'));
const Box = lazy(() => import('./menu/Box'));

const Router = () => (
  <Wrapper>
    <React.Suspense fallback={<Loader/>}>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/services' component={Services}/>
        <Route path='/box' component={Box}/>
      </Switch>
    </React.Suspense>
  </Wrapper>
);

export default withRouter(Router);
