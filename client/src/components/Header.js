import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div className="mb-5">
        <Navbar
          variant="dark"
          expand="lg"
          fixed="top"
          style={{backgroundColor: "rgb(32,32,32)"}}
        >
          <Navbar.Brand href="#home" className="brand ml-md-5">
           &#8918;Portfolio Generator/&#8919;
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="links">
                TEMPLATES
              </Nav.Link>
              <Nav.Link href="#link" className="links">
                MY WORK
              </Nav.Link>
              <Nav.Link href="/home" className="links">
                LOGOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

