import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import { BugOutlined, SecurityScanOutlined, AuditOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './Homepage.css'; // Ensure this import is correct
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Meta } = Card;

const Homepage = () => {
  return (
    <Layout>
      <Content style={{ padding: 0, marginTop: 0 }}  className='bg_image_Home'>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Sentron</h1>
            <p>Ensuring Your Security, One Test at a Time</p>
           {/* Button here */}
           
           <button class="custom-btn btn-12"><a className='white' href='http://localhost:5173/register'><span className='white'>Register</span><span>Try now</span></a></button>
          </div>
          
        </div>
        <div className="site-layout-content" style={{ padding: 24 }}>
          <Row gutter={16} justify="center">
            <Col span={8}>
              <Card hoverable className="service-card">
                <BugOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
                <Meta title="Vulnerability Assessment" description="Identifying weaknesses in your system before attackers do." />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="service-card">
                <SecurityScanOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
                <Meta title="Penetration Testing" description="Simulating real-world attacks to test your defenses." />
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable className="service-card">
                <AuditOutlined style={{ fontSize: '64px', color: '#1890ff', marginBottom: '16px' }} />
                <Meta title="Security Audits" description="Comprehensive audits to ensure compliance with industry standards." />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <p>©2024 Created by Hamza</p>
      </Footer>
    </Layout>
  );
};

export default Homepage;
