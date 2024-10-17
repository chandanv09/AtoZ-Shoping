import React, { useState } from "react";

import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
function Header(props) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
    setSearchText("");
  };
  return (
    <>
      <header className="sticky-top bg-white">
        <div className="header_top pt-2 pb-3">
          <Container>
            <Row>
              <Col md={3}>
                <Link to={"/"}>
                  <img src={Logo} width="220" />
                </Link>
              </Col>
              <Col md={6}>
                <Form className="mt-2" onSubmit={handleSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Search Product...."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </Form>
              </Col>

              <Col
                md={3}
                className="d-flex align-items-center justify-content-end cart"
              >
                <Link to={"/cart"}>
                  My Cart <i className="bi bi-cart3"></i>{" "}
                  <sup>
                    <Badge bg="danger">{props.cart.length}</Badge>
                  </sup>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header;
