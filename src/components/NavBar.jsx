import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tienda shops</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/1" as={NavLink}>
              Electrodomesticos
            </Nav.Link>
            <Nav.Link to="/category/2" as={NavLink}>
              Indumentaria
            </Nav.Link>
            <Nav.Link to="/category/3" as={NavLink}>
              Accesorios
            </Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
