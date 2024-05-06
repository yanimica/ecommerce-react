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
            <NavLink to="/category/remeras" as={NavLink}>
              remeras
            </NavLink>
            <NavLink to="/category/pantalones" as={NavLink}>
              pantalones
            </NavLink>
            <NavLink to="/category/shorts" as={NavLink}>
              shorts
            </NavLink>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
