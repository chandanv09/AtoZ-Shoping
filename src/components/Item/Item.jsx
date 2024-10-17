import React from "react";
import { Badge, Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <Col md={3} className="my-2">
      <Card className="h-100 " title={props.title}>
        <div className="product_img">
          <Link to={`/product/${props.id}`}>
            <Card.Img variant="top " src={props.url} />
          </Link>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title >{props.title}</Card.Title>
          <Card.Text>
            <h6></h6>
            <div className="d-flex align-items-center my-2">
              <Badge bg="success "> {props.rating}</Badge>
            </div>
            <div>
              <h5>
                <i className="bi bi-currency-rupee"></i>
                {props.price}
              </h5>

              <p>{props.discription}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
