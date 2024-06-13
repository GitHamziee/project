import React from 'react';
import { Card, Avatar, Row, Col } from 'antd';
import { UserOutlined, GithubOutlined, LinkedinOutlined , FacebookOutlined } from '@ant-design/icons';
import './About.css'; 
import hamzaImage from '../../assets/Hamza.png';
import talhaImage from '../../assets/Talha.jpg';
import aliImage from '../../assets/Ali.jpg';
const teamMembers = [
  {
    name: 'Hamza Rafique',
    position: 'React Developer',
    description: 'Exploring Js frameworks',
    avatar: hamzaImage
  },
  {
    name: 'Talha Rabri ',
    position: 'Team Lead',
    description: 'Specializing in Data science' , 
    avatar: talhaImage
  },
  {
    name: 'Amli Solat',
    position: 'Slackie',
    description: 'Daddy ki moni py ayashi',
    avatar: aliImage
  }
];

const About = () => (
  <div className='container-fluid bg-image'>
   <div className=" container team-section">
    <Row gutter={[20, 20]}>
      {teamMembers.map((member, index) => (
        <Col xs={15} sm={12} md={8} key={index}>
          <Card className="custom-card text-center">
            <Avatar size={150} src={member.avatar} icon={<UserOutlined />} className="mb-3 square-avatar"/>
            <h4>{member.name}</h4>
            <h6 className="text-muted">{member.position}</h6>
            <p>{member.description}</p>
            <div className="social-icons">
            <div className="icon-circle"><LinkedinOutlined /></div>
            <div className="icon-circle"><GithubOutlined /></div>
            <div className="icon-circle"><FacebookOutlined /></div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  </div>
 
);

export default About;
