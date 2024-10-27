// Pricing.js
import React, { useState } from 'react';
import { Card, Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { backend } from './url';
const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name,setName]=useState('')
const [data,setData]=useState(null)
const [status,setStatus]=useState('');
const [count,setCount]=useState('')

  const Buy = (price) => {
    setSelectedPrice(price);  
    setShowModal(true);       
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPhoneNumber('');     
  };

  const handleFormSubmit =async (e) => {
    e.preventDefault();
    if(name==="" || phoneNumber===""){
        setStatus("Fill the details!");
        return 
    }
    console.log(`Plan: ₹${selectedPrice}/month, Phone Number: ${phoneNumber}`);
try{
    var obj={phoneNumber,name,selectedPrice}
    var respose=await fetch(`${backend}/purchase`,{
        method:"POST",
        headers:{
           "Content-Type": "application/json",
        },
        body:JSON.stringify(obj)

    })

 var message=await respose.json();
 console.log(" from purchase :",message);
 setStatus(message.message);
//  console.log("mesage is:",message.message)
 setData(message.data);
//  setCount(message.purchases)
 console.log("return data is:",data);

}
catch(err){
    console.log("Error in the Purchasing the Course!",err);
    setStatus("Try after some time!");

}
setStatus(" ")

  
  };

  return (
    <Container className="my-5">
      <div style={{ padding: "5%" }}>
        <h2 className="text-center mb-4">Our Pricing Plans</h2>
        <p className="text-center text-muted mb-5">
          Choose the plan that best fits your learning needs and goals.
        </p>
        {/* <p style={{color:"green",textAlign:"center"}}> {count}</p> */}
        <Row className="justify-content-center">
          {/* Basic Plan */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <Card.Title>Basic</Card.Title>
                <h3 className="my-3">₹1000 / month</h3>
                <Card.Text className="text-muted">Ideal for learners who want to explore the basics.</Card.Text>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Access to free courses</li>
                  <li>Community forum access</li>
                  <li>Email support</li>
                </ul>
                <Button variant="primary" className="w-100" onClick={() => Buy(1000)}>Get Started</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Pro Plan */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow h-100 text-center border-primary">
              <Card.Body>
                <Card.Title>Pro</Card.Title>
                <h3 className="my-3">₹2500 / month</h3>
                <Card.Text className="text-muted">
      For serious learners who want deeper insights and hands-on practice.
             </Card.Text>
             <ul className="list-unstyled mt-3 mb-4">
                  <li>All Basic features</li>
              <li>Access to premium courses</li>
                  <li>Project-based learning</li>
                  <li>24/7 priority support</li>
                </ul>
                <Button variant="primary" className="w-100" onClick={() => Buy(2500)}>Get Started</Button>
       </Card.Body>
            </Card>
          </Col>

          {/* Enterprise Plan */}
          <Col md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Body>
                <Card.Title>Enterprise</Card.Title>
            <h3 className="my-3">₹5000 / month</h3>
                <Card.Text className="text-muted">
                  Perfect for teams and organizations looking to upskill at scale.
            </Card.Text>
                <ul className="list-unstyled mt-3 mb-4">
               <li>All Pro features</li>
                  <li>Dedicated account manager</li>
                  <li>Custom learning paths</li>
                  <li>Advanced analytics</li>
                </ul>
                <Button variant="primary" className="w-100" onClick={() => Buy(5000)}>Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Purchase Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6 style={{color:'red',textAlign:"center"}}>{status}</h6>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required 
                />


              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>

<Form.Control type="text" placeholder='Enter firstname and last name'
 onChange={(e)=>{setName(e.target.value)}} required/> 
           </Form.Group>
              <Button variant="primary" onClickCapture={handleFormSubmit} className="mt-3 w-100">
                Confirm Purchase
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
  );
};

export default Pricing;
