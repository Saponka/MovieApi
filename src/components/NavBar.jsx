import React from "react";
import { Navbar,Nav,Container,Form,FormControl,Button } from "react-bootstrap";

const NavBar = (props)=>{

  const fecha = new Date().getDate();
  //const date = new Date().getFullYear();

  //dias
  function diasEnString() {
    const dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
    const day =  new Date().getDay();
       return  dias[day] 
  };
 //meses
 function month() {
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const mes =  new Date().getMonth();
       return meses[mes]
   };

return(
  <Navbar expand="lg" className=" bg-dark text-light sticky-top">
  <Container fluid>
    <Navbar.Brand className="text-primary" href="#">BuscaPeli-O'Matic</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="text-light" href="/">Home</Nav.Link>
        <Nav.Link className="text-light" href="#action2">Contacto</Nav.Link>
        <Nav.Link className="text-muted" href="#action2" disabled> {diasEnString()} {fecha} {month()} {props.year}</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
    
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

} 
export default NavBar;