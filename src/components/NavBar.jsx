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
            {/*             <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link> */}
            <Nav.Link to="/category" as={NavLink}>
              Catalogo
            </Nav.Link>
            <Nav.Link to="/items" as={NavLink}>
              Items
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" as={<NavLink />}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" as={<NavLink />}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" as={<NavLink />}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
