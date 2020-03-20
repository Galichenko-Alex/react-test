import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import ServiceWrapper from './services/ServiceWrapper';

// services
const Lesson = lazy(() => import('./services/lesson/Lesson'));
const Mcq = lazy(() => import('./services/mcq/Mcq'));
const Pvpb = lazy(() => import('./services/pvpb/Pvpb'));
const Users = lazy(() => import('./services/users/Users'));
const Coupon = lazy(() => import('./services/coupon/Coupon'));
const Token = lazy(() => import('./services/token/Token'));
const AddService = lazy(() => import('./services/addService/AddService'));

const Services = () => (
  <ServiceWrapper>
    <Switch>
      <Route path='/services/lesson' component={Lesson}/>
      <Route path='/services/mcq' component={Mcq}/>
      <Route path='/services/pvpb' component={Pvpb}/>
      <Route path='/services/users' component={Users}/>
      <Route path='/services/coupon' component={Coupon}/>
      <Route path='/services/token' component={Token}/>
      <Route path='/services/add' component={AddService}/>
    </Switch>
  </ServiceWrapper>
);

export default Services;
