import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation(props) {

  return (
    <Navbar expand="lg" className="border-top primary-bg navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between">
            <Nav.Link>
              <Link to="/">All</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/menclothing">Men's Clothing</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Jwellery">Jwellery</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/eletronices">Electronics</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/womenclothing">Women's Clothing</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
