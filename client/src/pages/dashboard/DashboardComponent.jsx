
import React from 'react';
import { Avatar, Button, Card, Flex, Typography } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { UserOutlined } from '@ant-design/icons';
import Navbar from './../../layout/navbar';
import { Outlet, Link } from 'react-router-dom';
import PenetrationTestingComponent from '../PenetrationTesting/PenetrationTestingComponent';

const DashboardComponent = () => {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
  <>

    <Outlet></Outlet>
    </>
  );
};

export default DashboardComponent;
