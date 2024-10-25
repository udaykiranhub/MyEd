import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.css';

const ContactForm = () => {
  return (
    <div className="contact-section">
      <h3>Get Ready to board the Rocket!</h3>
      <Form className="contact-form">
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send it to my team
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
