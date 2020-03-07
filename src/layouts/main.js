import React, { useState } from "react";
import { Avatar, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  OrderedListOutlined
} from "@ant-design/icons";
import "./main.less";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoSm } from "../assets/logo-sm.svg";

const MainLayout = props => {
  const { children } = props;
  const { Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toggleSideBar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={56}
        className="main-sidebar fixed-sidebar"
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
          <p className="username -item-left">jvcarreon</p>
          <v className="clearfix" />
        </div>
        <Menu
          className="main-menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <DashboardOutlined />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <OrderedListOutlined />
            <span>Queue</span>
          </Menu.Item>
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
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MediCenter+ ©{new Date().getFullYear()} Created by{" "}
          <a href="https://www.jwits.co" target="_blank">
            JWITS
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
