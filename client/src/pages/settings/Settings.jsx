import React from 'react';
import { Alert, Button, Card, Form, Input, Typography, Divider, Radio } from 'antd';
import settingsImage from '../../assets/Settings.png';
import './settings.css';
import { useAuth } from '../../contexts/AuthContext';

const Settings = () => {
     const { userData } = useAuth();
  const handleUpdateSettings = async (values) => {
   
    console.log('Updating settings...', values);

   
   
  };

  return (
    <div className='container'>
      <Card className="form-container">
        <div style={{ display: 'flex', gap: 'large', alignItems: 'left' }}>
          {/* Image */}
          <div className="image-container" style={{ flex: 1 }}>
            <img src={settingsImage} className="auth-image" alt="Settings" />
          </div>
          {/* Form */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography.Title level={3} strong className="title">
              Settings
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
                Adjust your preferences.
            </Typography.Text>
            <Form layout="vertical" onFinish={handleUpdateSettings} autoComplete="off">
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
                <Input  placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please enter a valid email!',
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your new password!' }]}
              >
                <Input.Password placeholder="New password" />
              </Form.Item>

              <Form.Item
                label="Gender"
                name="gender"
              >
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </Radio.Group>
              </Form.Item>



              <Form.Item className='center'>
                <Button size="large" className="gradient-button">
                 Update Changes
                </Button>
              </Form.Item>

            
            </Form>
          </div>
        </div> 
      </Card>
    </div>
  );
};

export default Settings;
