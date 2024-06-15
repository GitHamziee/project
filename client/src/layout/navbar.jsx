import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, UserOutlined, LogoutOutlined, MenuOutlined, LoginOutlined , DingdingOutlined} from '@ant-design/icons';
import './navbar.css';
import Logoimage from '../assets/Logo.png';
import { useAuth } from '../contexts/AuthContext';
import { Link, Outlet } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { userData, logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <img src={Logoimage} className="logo" alt="Logo" />
          {isMobile ? (
            <Button type="primary" onClick={showDrawer} className="mobileVisible">
              <MenuOutlined />
            </Button>
          ) : (
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '60px', marginLeft: 'auto' }}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              {isAuthenticated ? (null ) : (
                  <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                  <Link to="/about">About Us</Link>
                </Menu.Item>
              ) }
            
              {isAuthenticated ? (
                <>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to="dashboard/user">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="6" icon={<DingdingOutlined />} >
                    <Link to='dashboard/testing'>Tool</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<LogoutOutlined />} onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                
                </>
              ) : (
                <Menu.Item key="5" icon={<LoginOutlined />}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
              )}
            </Menu>
          )}
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu theme="light" mode="vertical" >
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              
              {isAuthenticated ? (
                <>
                  <Menu.Item key="4" icon={<UserOutlined />}>
                    <Link to="dashboard/user">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<LogoutOutlined />} onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                  <Menu.Item key="6" icon={<LogoutOutlined />} >
                    <Link to='dashboard/testing'>Tool</Link>
                  </Menu.Item>
                </>
              ) : (
                <div>
                  <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                <Link to="/about">About Us</Link>
              </Menu.Item>

              <Menu.Item key="7" icon={<LoginOutlined />}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
                </div>
                
              )}
            </Menu>
          </Drawer>
        </Header>
      </Layout>
      <Outlet />
    </>
  );
};

export default Navbar;
