import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './menu';
// import VideoSection from './video';
// import Features from './features';
// import ContactForm from './contact';
// import './App.css';

import FeaturesData from './featuresData';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './home';
import Footer  from './footer';
import About from './about';
import Pricing from './pricing';
const App = () => {
  return (
    <Router>
    <div className='app'>
      <Menu />
      <Container fluid className="main-container">

          {/* <VideoSection />
        <Features />
        <ContactForm /> */}
<Routes>
<Route path="/" element={  <Home/>}/>
<Route path="/features" element={<FeaturesData/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/pricing" element={<Pricing/>}/>
</Routes>


      </Container>

      <Footer/>
 
    </div>
    </Router>
  );
};

export default App;
