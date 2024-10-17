import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../Data";
import { Badge, Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DataContext } from "../../context/Context";
function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relativeProduct, setRelativeProduct] = useState([]);
  const { cart, setCart, addToCart } = useContext(DataContext);
  useEffect(() => {
    const filterProduct = Items.filter((item) => item.id == id);
    setProduct(filterProduct[0]);

    const sameProduct = Items.filter(
      (item) => item.category === product.category
    );

    setRelativeProduct(sameProduct);
  }, [id, product.category]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Container className="my-5">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <Row className="align-items-center">
          <Col md={4}>
            <img src={product.image} className="img-fluid p-5" />
          </Col>
          <Col md={{ span: 7, offset: 1 }} className="">
            <h4>{product.title}</h4>
            <p>
              Rating <Badge bg="success mt-3"> {product.rating}</Badge>
            </p>

            <p className="text-secondary">{product.description}</p>
            <h5>
              Price <i className="bi bi-currency-rupee"></i>{" "}
              <b>{product.price}</b>
            </h5>
            <Row>
              <Col md={8}>
                <div className="d-flex my-3">
                  <Button
                    variant="warning px-5 btn-lg"
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.title,
                        product.image,
                        product.price,
                        product.description
                      )
                    }
                  >
                    Add to cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="border-top my-4">
            <h4 className="my-3">Relative Products</h4>
          </Col>
          <Carousel responsive={responsive}>
            {relativeProduct.map((item) => (
              <Card className="h-100 mx-2" key={item.id}>
                <div className="product_img">
                  <Link to={`/product/${item.id}`}>
                    <Card.Img variant="top p-3" src={item.image} />
                  </Link>
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <div className="d-flex align-items-center my-2">
                      <Badge bg="success "> {item.rating}</Badge>
                    </div>
                    <div>
                      <h5>
                        <i className="bi bi-currency-rupee"></i>
                        {item.price}
                      </h5>

                      <p>{item.discription}</p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Carousel>
          ;
        </Row>
      </Container>
    </>
  );
}

export default ProductDetails;
