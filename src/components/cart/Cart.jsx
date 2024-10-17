import React, { useContext } from "react";
import "./Cart.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Context";
function Cart(props) {
  
  const {cart , setCart , deleteItem} = useContext(DataContext)


  return (
    <>
      <Container className="my-3">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            {cart.length !== 0 ? (
              cart.map((item) => (
                <Card className="my-3">
                  <Row className="align-items-center">
                    <Col md={4}>
                      <Card.Img variant="top p-3" src={item.image} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <h5 className="my-3">
                          <i class="bi bi-currency-rupee"></i> {item.price}
                        </h5>
                        <Button
                          variant="danger"
                          onClick={() => deleteItem(item.id)}
                        >
                          Remove
                        </Button>
                        <Button variant="warning mx-2">Buy Now</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <div className="text-center my-2  py-5">
                
                  <h3>Your Cart is Empty</h3>
                  <Button variant="warning my-2">
                    <Link to={"/"}>Continue Shoping</Link>
                  </Button>
                </div>
             
            )}

            <div className="buttons-group"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
