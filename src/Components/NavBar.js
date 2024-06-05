import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={NavLink} to="/">
        Shopping Site
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/account">
              Account
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
