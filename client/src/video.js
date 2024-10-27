import React, { useState } from 'react';
import './video.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { backend } from './url';
import PricingCounts from './pricecount';

const VideoSection = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [query, setQuery] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setName('');
    setPhone('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, query };

    if (name === "" || phone === "") {
      setStatus("Fill all the details!");
      return;
    }

    try {
      const response = await fetch(`${backend}/talk`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Use `response.json()` to parse JSON

      if (response.ok) {
        console.log('Data sent successfully');
        setStatus(data.message);
        handleClose();
      } else {
        console.error('Error sending data');
        setStatus(data.message);
        handleClose();
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('There was an error sending your request. Please try again.');
      handleClose();
    } finally {
      setStatus('');
      handleClose();
    }
  };

  return (
    <div className="video-section">
      <div className='head'>
        <Button style={{ backgroundColor: "darkblue", borderRadius: "60px" }}>
          <h6>School /Teachers/Parents</h6>
        </Button>
        <h1>Powering K12 with new-age SAAS.</h1>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0" }} className="btn-space">
          <Button
            className='btn'
            style={{
              border: "1px solid blue",
              borderRadius: "30px",
              padding: "10px 20px 10px",
              margin: "5px",
              minWidth: "150px",
            }}
            onClick={handleShow}
          >
            Talk to Team
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Talk to Team</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <p ><span style={{color:"red"}}>Note:</span> You need to send  contact details before Talking!!</p>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </Form.Group>

                <Form.Group controlId="formQuery" className="mt-3">
                  <Form.Label>Query</Form.Label>
                  <Form.Control
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/39LMefHPNSw?si=NI4PmXhVLEv18_xf"
            title="YouTube video player"
            frameBorder="0" // Updated to `frameBorder`
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // Updated to `referrerPolicy`
            allowFullScreen // Updated to `allowFullScreen`
          ></iframe>
        </div>
      </div>

      <PricingCounts />
    </div>
  );
};

export default VideoSection;
