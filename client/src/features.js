import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './features.css';

const Features = () => {
  return (
    <div className="features-section">
    
      <h3>Trusted by Teachers at over 1,000 of the  india's leading Schools</h3>
      <h2>Features that work for your future.</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="feature-box">
          <h3>Reports Dashboard</h3>
          <p>Get detailed insights and reports with the dashboard designed for your success.</p>
        </Col>
        <Col xs={12} md={6} lg={4} className="feature-box">
          <h3>AI Attendance</h3>
          <p>Automate attendance tracking with cutting-edge AI solutions.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
