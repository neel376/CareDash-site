import React from 'react';
import logo from '../../logo.svg'

import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Image } from 'react-bootstrap';
// import AngleDown from 'react-icons/lib/fa/angle-down';


class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    
  }

  render() {
    return (
     <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
         <Image src={logo} responsive />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#" class="nav-active">
            Home
          </NavItem>
          <NavItem eventKey={1} href="#">
            Impact
          </NavItem>
          <NavItem eventKey={2} href="#">
            Services
          </NavItem>
          <NavDropdown eventKey={3} title="Solutions" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Reviews</MenuItem>
            <MenuItem eventKey={3.2}>Find Doctors</MenuItem>
            <MenuItem eventKey={3.2}>Profiles</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>More</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
    )
  }
}


export default NavBar;
