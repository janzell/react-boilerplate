import React, { useState } from "react";
import { Avatar, Layout, Menu, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./main.less";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as LogoSm } from "../assets/img/logo-sm.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import routes from "../routes";

const BaseLayout = props => {
  let location = useLocation();
  const { Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };
  const renderMenuList = () => {
    return routes.info.map(route => (
      <Menu.Item key={route.key}>
        <route.icon />
        <span>{route.title}</span>
        <Link to={route.path} />
      </Menu.Item>
    ));
  };

  const renderRoutes = () => {
    return routes.info.map((route, index) => (
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

  return (
    <Layout hasSider={true}>
      <Sider
        collapsible
        trigger={null}
        theme="light"
        collapsed={collapsed}
        collapsedWidth={56}
        className="main-sidebar fixed-sidebar"
        breakpoint="sm"
      >
        <div className="sidebar-toggle-cont">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="sidebar-toggle"
              onClick={() => toggleSideBar()}
            />
          ) : (
            <MenuFoldOutlined
              className="sidebar-toggle"
              onClick={() => toggleSideBar()}
            />
          )}
        </div>
        <div className="user-info">
          <Avatar className="sidebar-avatar" size="large">
            JV
          </Avatar>
          <Typography className="username -item-left">jvcarreon</Typography>
          <div className="clearfix" />
        </div>
        <Menu
          className="main-menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={[`info${location.pathname}`]}
        >
          {renderMenuList()}
        </Menu>
        <div className="logo-cont">{collapsed ? <LogoSm /> : <Logo />}</div>
      </Sider>
      <Layout
        className={`layout-has-fixed-sidebar ${
          collapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <Content className="main-content">
          <div className="header-banner" />
          <div className="content-wrapper">
            <Switch>{renderRoutes()}</Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MediCenter+ ©{new Date().getFullYear()} Created by{" "}
          <a
            href="https://www.jwits.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            JWITS
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

/**
 *  Wrap base layout with Router so react router hooks can be used
 * @returns {*}
 * @constructor
 */
const RouterCont = () => {
  return (
    <Router>
      <BaseLayout />
    </Router>
  );
};

const MainLayout = RouterCont;
export default MainLayout;
