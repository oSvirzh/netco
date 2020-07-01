import React from 'react';
import { Standings } from './pages/Standings/Standings';
import { CommonLayout } from './components/layout/CommonLayout';

const App = () => (
  <CommonLayout>
    <Standings/>
  </CommonLayout>
);

export { App };
