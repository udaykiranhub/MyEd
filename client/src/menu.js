import { Navbar, Nav, Container } from 'react-bootstrap';
import "./menu.css"
import logo from "./MyEdlogo.jpg"
const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className='nav'>
      <Container className='nav-text'>
        <Navbar.Brand href="#home"><img src={logo} width="100px" height="30px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link href="#home"  style={{color:"white",fontSize:"20px"}}>Home</Nav.Link>
            <Nav.Link href="#features"  style={{color:"white",fontSize:"20px"}}>Features</Nav.Link>
            <Nav.Link href="#pricing"  style={{color:"white ",fontSize:"20px"}}>Pricing</Nav.Link>
          </Nav>
           </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
