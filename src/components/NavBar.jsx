import React from "react";
import { Navbar,Nav,Container,Form,FormControl,Button } from "react-bootstrap";

const NavBar = (props)=>{

return(
  <Navbar expand="lg" className=" bg-dark text-light sticky-top">
  <Container fluid>
    <Navbar.Brand className="text-light" href="#">Movie Api</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="text-light" href="#action1">Home</Nav.Link>
        <Nav.Link className="text-light" href="#action2">Contacto</Nav.Link>
        <Nav.Link className="text-light" href="#action2">{props.year}</Nav.Link>
        <Nav.Link className="text-muted" href="#" disabled>
          API
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar..."
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="outline-success">Buscar </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

} 
export default NavBar;