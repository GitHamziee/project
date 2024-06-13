import React from 'react';
import { Avatar, Card, Col, Row, Typography, Divider, Space } from 'antd';
import { UserOutlined, EditOutlined, SettingOutlined , FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';
import './user.css';
import { Link, Outlet } from 'react-router-dom';
import avatarImage from '../../assets/Dummy.png'

function UserProfileComponent() {
  const { userData } = useAuth();

  return (
    
      
    
    <Space direction="vertical" size="large" className="profile-container">
      <Outlet></Outlet>
      <Card className="profile-card image">
        <Row>
          <Col xs={24} md={8} className="profile-left">
            <Avatar size={100} src={avatarImage} className="profile-avatar" />
            <Typography.Title level={4} className="profile-name">{userData?.name}</Typography.Title>
            <Typography.Paragraph className="profile-role">Web Designer</Typography.Paragraph>
           <Link to="/settings">    <SettingOutlined className="profile-edit-icon" /></Link>
       
          </Col>
          <Col xs={24} md={16} className="profile-right">
            <Typography.Title level={4}>Information</Typography.Title>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <Typography.Text strong>Email</Typography.Text>
                <Typography.Paragraph>{userData?.email}</Typography.Paragraph>
              </Col>
              <Col span={15}>
                <Typography.Text strong>Phone</Typography.Text>
                <Typography.Paragraph>+923348547377</Typography.Paragraph>
              </Col>
            </Row>
            <Typography.Title  level={4}>Status </Typography.Title>
            <Typography.Paragraph className='ml-1'>{userData?.role}</Typography.Paragraph>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Typography.Text strong>Scans Count</Typography.Text>
                <Typography.Paragraph>0</Typography.Paragraph>
               
              </Col>
              <Col span={12}>
                <Typography.Text strong>Total Threats</Typography.Text>
                <Typography.Paragraph>0</Typography.Paragraph>
              </Col>
            </Row>
            <Divider />
            {/* <Row justify="center" gutter={[16, 16]}>
              <Col>
                <FacebookOutlined className="social-icon facebook" />
              </Col>
              <Col>
                <TwitterOutlined className="social-icon twitter" />
              </Col>
              <Col>
                <InstagramOutlined className="social-icon instagram" />
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Card>
     
    </Space>
    
  );
}

export default UserProfileComponent;
