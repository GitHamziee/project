// navbar.jsx

import React, { useState, useEffect ,} from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined, UserOutlined, LogoutOutlined, MenuOutlined , LoginOutlined} from '@ant-design/icons';
import './navbar.css';
import Logoimage from '../assets/Logo.png';
import { useAuth } from '../contexts/AuthContext';
import { Link, Outlet } from 'react-router-dom';


const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setVisible(false); // Close drawer when switching to desktop view
    }
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

  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const { isAuthenticated } = useAuth();



  return (
    <>
     <Layout>
      <Header className="header">
          <img  src={Logoimage} className="logo" />
          
        {isMobile ? (
          <Button type="primary" onClick={showDrawer} className="mobileVisible">
            <MenuOutlined />
          </Button>
        ) : (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="mobileHidden" style={{ lineHeight: '64px', marginLeft: 'auto' }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
               <Link to="/">Home</Link>              
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to="/about"> About Us </Link>
            </Menu.Item>
            {/* <Menu.Item>
              <Link to="/register">
                <Button size="large" className="btn">
                  Create an account
                </Button>
              </Link>
            </Menu.Item> */}
            {isAuthenticated ? ( 
              <>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="dashboard/user"> Profile</Link>
                     
                    </Menu.Item>
                      <Menu.Item    onClick={handleLogout }key="5" icon={<LogoutOutlined />}>
                      Logout
                    </Menu.Item>
              </>
                      ) :
                <Menu.Item key="5" icon={<LoginOutlined />}>
                      <Link to="/login"> login</Link>
                   </Menu.Item>
                      }
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
          <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              <Link to="/about"> About Us </Link>
            </Menu.Item>
            {isAuthenticated ? ( 
              <>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="dashboard/user"> Profile</Link>
                     
                    </Menu.Item>
                      <Menu.Item    onClick={handleLogout }key="5" icon={<LogoutOutlined />}>
                      Logout
                    </Menu.Item>
              </>
                      ) :
                <Menu.Item key="5" icon={<LoginOutlined />}>
                      <Link to="/login"> login</Link>
                   </Menu.Item>
                      }
          </Menu>
        </Drawer>
      </Header>
    </Layout>
    <Outlet></Outlet>
    </>
   
  );
};


export default Navbar;
