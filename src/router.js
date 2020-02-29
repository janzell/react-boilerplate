import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from 'layouts/base';

const RouterWrapper = () => {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
};

export default RouterWrapper;
