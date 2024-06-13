import React from 'react';
import { Alert, Button, Card, Form, Input, Spin, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.png';
import useLogin from '../hooks/useLogin';
import './Auth.css';

const Login = () => {
  const { error, loading, loginUser } = useLogin();

  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <div className='container '>
      <Card className="form-container">
        <div style={{ display: 'flex', gap: 'large', alignItems: 'left' }}>
          {/* Image */}
          <div className="image-container" style={{ flex: 1 }}>
            <img src={loginImage} className="auth-image" alt="Login" />
          </div>
          {/* Form */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography.Title level={3} strong className="title">
              Sign In
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
                Unlock your world.
            </Typography.Text>
            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                  {
                    type: 'email',
                    message: 'The input is not valid Email!',
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
              </Form.Item>

              {error && (
                <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                />
              )}

              <Form.Item className='center'>
                <Button
                  type={`${loading ? '' : 'primary'}`}
                  htmlType="submit"
                  size="large"
                  className="log-btn"
                >
                  {loading ? <Spin /> : 'Sign In'}
                </Button>
              </Form.Item>

              <Divider>OR</Divider>

              <Form.Item className='center'>
                <Button size="large" className="gradient-button">
                  <Link to="/register">Create an account</Link>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
