import Dashboard from './pages/dashboard';
import Queue from './pages/queue';
import Departments from 'pages/departments';
import ServicesPricing from 'pages/services-pricing';
import React from 'react';
import IconFont from 'components/IconFont';
import ServicesPricesIcon from 'components/services-pricing/ServicesPricingIcon';
import DepartmentIcon from 'components/department/DepartmentIcon';
import Login from 'pages/login';

const routes = [
  {
    key: 'login',
    path: '/login',
    title: 'Login',
    component: Login,
    sidebar: false
  },
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
    icon: <IconFont className="icon" type="iconshouye" />
  },
  {
    key: 'queue',
    path: '/queue',
    title: 'Queue',
    component: Queue,
    icon: <IconFont className="icon" type="iconyouhui" />
  },
  {
    key: 'departments',
    path: '/departments',
    title: 'Departments',
    component: Departments,
    icon: <DepartmentIcon />
  },
  {
    key: 'services-pricing',
    path: '/services-pricing',
    title: 'Services & Pricing',
    component: ServicesPricing,
    icon: <ServicesPricesIcon />
  }
];

export default routes;
