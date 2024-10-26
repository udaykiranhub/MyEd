import React from 'react';
import { Form, Button ,Spinner} from 'react-bootstrap';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { backend } from './url';
const ContactForm = () => {

const [fname,setFname]=useState('')
const [lname,setLname]=useState('');
const [phone,setPhone]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('')
const [city,setCity]=useState('')
const [school,setSchool]=useState('')

const [status,setStatus]=useState('')

const [loading, setLoading] = useState(false); 

//
const sendDetails=async (e)=>{
e.preventDefault();

setLoading(true); 
try{
var obj={firstName:fname,lastName:lname,schoolName:school,city,email,phone,message};
console.log("obj is :",obj);
if(fname==='' || lname==='' || school==='' || email==='' || phone==='' ||city==='' || message===''){
  setStatus("Fill all the fields!");
  return ;

}
let sent=await fetch(`${backend}/submit`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
  }
)
var data=await sent.json();
console.log("data is:",data);
setStatus(data.message);

}
catch(err){
  console.log("Something went worng!"+err);
  setStatus("Try after some time!");

}

finally{
  setLoading(false);
}
}


  return (
    <div className="contact-section">
      <h3>Get Ready to board the Rocket!</h3>
      <p style={{color:"white"}}>Let's align our  constellations! reach out and let the magic of collaboration illuminate our skies</p>
      <div style={{color:"red"}}>{status }</div>
      {/* {add a loading spinner} */}
      <Form className="contact-form">
        <Form.Group controlId="formName" style={{display:"flex"}}>
          <Form.Control type="text" placeholder="Last Name"  onChange={(e)=>{setLname(e.target.value)}}/>
          <Form.Control type="text" placeholder="First Name" onChange={(e)=>{setFname(e.target.value)}} />
        </Form.Group>
        <Form.Group controlId="formName" >
          <Form.Control type="text"
           placeholder="School Name" onChange={(e)=>{setSchool(e.target.value)}} />
    
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Control type="text" placeholder="City" onChange={(e)=>{setCity(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email Address" 
          onChange={(e)=>{setEmail(e.target.value)}} />
        </Form.Group>

   
        <Form.Group controlId="formPhone">
          <Form.Control type="text" placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}} />
        </Form.Group>
        <Form.Group controlId="formMessage">
        <Form.Control
          as="textarea" 
          rows={3} 
          placeholder="Your Message" 
          onChange={(e)=>{setMessage(e.target.value)}}
        />
      </Form.Group>
        <Button variant="primary"  onClick={sendDetails} type="submit">
          {/* Send it to my team...{<FontAwesomeIcon icon={faRocket} />} */}
          {loading ? (
            <div style={{paddingRight:"25%"}}>
              Sending... <Spinner as="span" animation="border" 
              ize="sm" role="status" aria-hidden="true" />
            </div>
          ) : (
            <>Send it to my team... <FontAwesomeIcon icon={faRocket} /></>
          )}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
