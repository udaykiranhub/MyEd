import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

import logo from "./MyEdlogo.jpg"

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          {/* Contact Information */}
          <Col md={4} sm={6} xs={6} className="footer-section">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@myed.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>

          {/* Address Information */}
          <Col md={4} sm={6}  xs={6} className="footer-section">
            <h5>Address</h5>
            <ul className="list-unstyled">
              <li>123 MyEd Street</li>
              <li>Suite 101</li>
              <li>City, State, ZIP</li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col md={4} sm={6} xs={6} className="footer-section">
            <h5>Social</h5>
            <ul className="list-unstyled social-links">
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Information */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MyEd. All Rights Reserved.</p>
            <img src={logo} width="100px" height="30px" style={{float:'right'}} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
