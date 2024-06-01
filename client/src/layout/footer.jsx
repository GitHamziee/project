// footer.jsx

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ContactsOutlined, UserOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import './footer.css';

const { Footer } = Layout;

const CustomFooter = () => {
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

  return (
    <Footer className="footer">
      <div className="logo">LOGO</div>
      {isMobile ? (
        <Button type="primary" onClick={showDrawer} className="mobileVisible">
          <MenuOutlined />
        </Button>
      ) : (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="mobileHidden" style={{ lineHeight: '64px', marginLeft: 'auto' }}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      )}
      <Drawer
        title="Menu"
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu theme="light" mode="vertical" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            Contact
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
    </Footer>
  );
};

export default CustomFooter;

