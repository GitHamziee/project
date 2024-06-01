import React from 'react';
import { Avatar, Button, Card, Flex, Typography } from 'antd';
import { useAuth } from '../contexts/AuthContext';
import { UserOutlined } from '@ant-design/icons';
import Navbar from '../layout/navbar';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
  
    <Card className="profile-card">
      <Flex vertical gap="small" align="center">
        <Avatar size={150} icon={<UserOutlined />} className="avatar" />
        <Typography.Title level={2} strong className="username">
          {userData.name}
        </Typography.Title>
        <Typography.Text type="secondary" strong>
          Email: {userData.email}
        </Typography.Text>
        <Typography.Text type="secondary">
          Role: {userData.role}
        </Typography.Text>
        <Outlet />
        <Link to="/dashboard/Homepage">Search</Link>
        {/* <Button
          size="large"
          type="primary"
          className="profile-btn"
          onClick={handleLogout}
        >
          Logout
        </Button> */}
        
      </Flex>
    </Card>

    

    
  );
};

export default Dashboard;
