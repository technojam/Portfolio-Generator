import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Navbar.Brand href="#home">Portfolio Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">My Work</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

