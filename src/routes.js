import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './components/Main';
import Home from './components/Home';

const routerList = props => (
  <Routes>
    <Route path='/' element={<Main /> } />
    <Route path='/home' component={<Home />} />
  </Routes>
);

export default routerList;
