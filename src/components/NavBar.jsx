import { Nav, Navbar, Container } from "react-bootstrap";
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
              Remeras
            </NavLink>
            <NavLink to="/category/pantalones" as={NavLink}>
              Pantalones
            </NavLink>
            <NavLink to="/category/shorts" as={NavLink}>
              Shorts
            </NavLink>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
