import React from 'react';
import { Layout, Avatar, Typography, Menu } from 'antd';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import { ReactComponent as LogoSm } from 'assets/img/logo-sm.svg';

import { Link } from 'react-router-dom';

import routes from '../../routes';

const Sidebar = ({ location, collapsed, sidebarToggle }) => {
  const { Sider } = Layout;

  const renderMenuList = () => {
    return routes
      .filter(route => route.sidebar !== false)
      .map(route => (
        <Menu.Item key={route.key}>
          {route.icon}
          <span>{route.title}</span>
          <Link to={route.path} />
        </Menu.Item>
      ));
  };

  return (
    <Sider
      collapsible
      trigger={null}
      theme="light"
      collapsed={collapsed}
      collapsedWidth={56}
      className="main-sidebar fixed-sidebar"
      breakpoint="sm"
    >
      <div className="sidebar-toggle-cont">{sidebarToggle}</div>
      <div className="user-info">
        <Avatar className="sidebar-avatar" size="large">
          JV
        </Avatar>
        <Typography className="username -item-left">jvcarreon</Typography>
      </div>
      <Menu
        className="main-menu"
        theme="light"
        mode="inline"
        defaultSelectedKeys={[`${location.pathname}`]}
      >
        {renderMenuList()}
      </Menu>
      <div className="logo-cont">{collapsed ? <LogoSm /> : <Logo />}</div>
    </Sider>
  );
};

export default Sidebar;
