import React from 'react';
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography , Divider } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from '../assets/register.png';
import useSignup from '../hooks/useSignup';
import Navbar from '../layout/navbar';

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };

  return (

    
    <div className='container'>
      <Card className="form-container ">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form layout="vertical" className='center' onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input size="large" placeholder="Enter your full name" />
            </Form.Item>
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
            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: 'Please input your Confirm Password!',
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your password"
              />
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
            <Form.Item>
              <Button
                type={`${loading ? '' : 'primary'}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : 'Create Account'}
              </Button>
            </Form.Item>
            <Form.Item >

              <Divider>OR</Divider>
              <Link to="/login">
                <Button size="large" className="gradient-button">
                  <Link to="/login"> Log in </Link>   
                  </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>

        {/* Image */}
        <Flex flex={1}>
          <img src={registerImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
    </div>
    
  );
};

export default Register;
