import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './main.less';

import { Switch, Route, useLocation } from 'react-router-dom';

import Banner from './base/banner';
import Sidebar from './base/sidebar';
import Footer from './base/footer';

import routes from '../routes';

const BaseLayout = props => {
  let location = useLocation();

  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  const renderRoutes = () => {
    return routes.map(route => (
      // You can render a <Route> in as many places
      // as you want in your app. It will render along
      // with any other <Route>s that also match the URL.
      // So, a sidebar or breadcrumbs or anything else
      // that requires you to render multiple things
      // in multiple places at the same URL is nothing
      // more than multiple <Route>s.
      <Route {...route} />
    ));
  };

  const sidebarToggle = () => {
    return collapsed ? (
      <MenuUnfoldOutlined
        className="sidebar-toggle"
        onClick={() => toggleSideBar()}
      />
    ) : (
      <MenuFoldOutlined
        className="sidebar-toggle"
        onClick={() => toggleSideBar()}
      />
    );
  };

  return (
    <Layout hasSider={true}>
      <Sidebar
        collapsed={collapsed}
        location={location}
        sidebarToggle={sidebarToggle()}
      />
      <Layout
        className={`layout-has-fixed-sidebar ${
          collapsed ? 'sidebar-collapsed' : ''
        }`}
      >
        <Content className="main-content">
          <Banner />
          <div className="content-wrapper">
            <Switch>{renderRoutes()}</Switch>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
