import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { UserOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import './About.css'; 
import hamzaImage from '../../assets/Hamza.jpg';
const teamMembers = [
  {
    name: 'Hamza Rafique',
    position: 'Sole owner of Amli',
    description: 'Owning slaves is my hobby',
    avatar: hamzaImage
  },
  {
    name: 'Sarah Jhonson',
    position: 'Product Manager',
    description: 'Aut maiores voluptates amet et quis praesentium qui senda para',
    avatar: '/path-to-image2.jpg'
  },
  {
    name: 'William Anderson',
    position: 'CTO',
    description: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
    avatar: '/path-to-image3.jpg'
  }
];

const About = () => (
  
  <div className=" container team-section">
    <Row gutter={[20, 20]}>
      {teamMembers.map((member, index) => (
        <Col xs={15} sm={12} md={8} key={index}>
          <Card className="custom-card text-center">
            <Avatar size={150} src={member.avatar} icon={<UserOutlined />} className="mb-3 square-avatar"/>
            <h3>{member.name}</h3>
            <h5 className="text-muted">{member.position}</h5>
            <p>{member.description}</p>
            <div className="social-icons">
              <div className="icon-circle"><FacebookOutlined /></div>
              <div className="icon-circle"><TwitterOutlined /></div>
              <div className="icon-circle"><InstagramOutlined /></div>
              <div className="icon-circle"><LinkedinOutlined /></div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default About;
