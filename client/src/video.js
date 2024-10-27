import React from 'react';
import './video.css';

import { Button } from 'react-bootstrap';
import PricingCounts from './pricecount';
const VideoSection = () => {
  return (
    <div className="video-section">
      <div className='head'>
      <Button style={{backgroundColor:"darkblue",borderRadius:"60px"}} ><h6>School /Teachers/Parents</h6> </Button>
      <h1>Powering K12 with new-age SAAS.</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px 0" }} className="btn-space">
  <Button className='btn'
    style={{
      border: "1px solid blue",
      borderRadius: "30px",
      padding: "10px 20px",
      margin: "5px",
      minWidth: "150px", // Ensures a minimum width for buttons
    }}>
    Download App
  </Button>

  <Button className='btn'
    style={{
      border: "1px solid blue",
      borderRadius: "30px",
      padding: "10px 20px",
      margin: "5px",
      minWidth: "150px", // Ensures a minimum width for buttons
    }}>
    Talk to an Expert
  </Button>

</div>



      </div>


      <div className="video-container">

      <div className="video-wrapper">
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-_5dLLUbXNc?si=l2crWkFOrI67axsF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/39LMefHPNSw?si=NI4PmXhVLEv18_xf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



      </div>
      <PricingCounts/>
    </div>
  );
};

export default VideoSection;
