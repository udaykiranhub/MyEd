import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './menu';
import VideoSection from './video';
import Features from './features';
import ContactForm from './contact';
import './App.css';


import Footer  from './footer';
const App = () => {
  return (
    <div className='app'>
      <Menu />
      <Container fluid className="main-container">
        <VideoSection />
        <Features />
        <ContactForm />
      </Container>
      <Footer/>
    </div>
  );
};

export default App;
