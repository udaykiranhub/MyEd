// About.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import edscope from "./edscope.jpeg"
import edtech from "./edtech.jpeg";
import edvision from "./edvision.jpeg"
const About = () => {
  return (
    <Container className="my-5" style={{padding:"15%"}}>
      <h2 className="text-center mb-4">About Our Platform</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src={edvision}
              alt="Transforming Education"
            />
            <Card.Body>
              <Card.Title>Transforming Education</Card.Title>
              <Card.Text>
                Our SaaS platform leverages cutting-edge technology to make
                education accessible and personalized. We bridge gaps in
                traditional learning by offering curated courses, advanced
                tracking tools, and interactive content for a superior learning
                experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src={edscope}
              alt="Empowering Learners"
            />
            <Card.Body>
              <Card.Title>Empowering Learners</Card.Title>
              <Card.Text>
                We believe in putting learners first. Our platform is designed
                to empower students and professionals to reach their full
                potential by providing on-demand access to quality educational
                resources and a community-driven learning environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src={edtech}
              alt="Innovative Approach"
            />
            <Card.Body>
              <Card.Title>Innovative Approach</Card.Title>
              <Card.Text>
                Our innovative approach combines data analytics, personalized
                recommendations, and adaptive learning techniques to deliver
                content that evolves with the learner’s journey. Our goal is to
                make learning as dynamic as the world we live in.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
