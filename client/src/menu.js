import { Navbar, Nav, Container } from 'react-bootstrap';
import "./menu.css";
import logo from "./MyEdlogo.jpg";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className='nav'>
      <Container className='nav-text'>
        <Navbar.Brand >
          <img src={logo} width="100px" height="30px" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  as={Link}  to="/" style={{ color: "white", fontSize: "20px" }}>
              Home
            </Nav.Link>
            <Nav.Link     as={Link}  to="/pricing" style={{ color: "white", fontSize: "20px" }}>
       Pricing
            </Nav.Link>
            <Nav.Link   as={Link}  to="/features" style={{ color: "white", fontSize: "20px" }}>
              Features
            </Nav.Link>
   
            <Nav.Link     as={Link}  to="/about" style={{ color: "white", fontSize: "20px" }}>
              About
            </Nav.Link>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
