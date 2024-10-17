import React, { useEffect, useState } from "react";
import Itemlist from "./itemlist/Itemlist";
import { Items } from "./Data";
import { Col, Container, Row , Form } from "react-bootstrap";
function Jwellery() {
  const [jwelleryData, setJwelleryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  useEffect(() => {
    const jwelleryProduct = Items.filter(
      (item) => item.category === "jewelery"
    );
    setJwelleryData(jwelleryProduct);
    setFilteredData(jwelleryProduct)
  }, []);

  useEffect(() => {
    if (selectedPrices.length > 0) {
      const filtered = jwelleryData.filter((item) =>
        selectedPrices.some((price) => item.price <= price)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(jwelleryData);
    }
  }, [selectedPrices, jwelleryData]);

  const togglePriceFilter = (price) => {
    setSelectedPrices((prev) => {
      if (prev.includes(price)) {
        return prev.filter((p) => p !== price);
      } else {
        return [...prev, price];
      }
    });
  };
  return (
    <div className="my-3">
      <Container>
        <Row>
          <Col>
            {" "}
            <h4>Jwellery</h4>
          </Col>
        </Row>

        <Row>
          <Col md={2} className="pr-0">
            <div className="card filter my-4 p-3 vh-100 ">
              <h6>Filter</h6>
              <ul>
                {[500, 1000, 1500, 2000].map((price) => (
                  <li key={price}>
                    <Form.Check
                      onChange={() => togglePriceFilter(price)}
                      type="checkbox"
                      id={`price-${price}`}
                      label={`Price 0 - ${price}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col md={10}>
            <Itemlist Items={filteredData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Jwellery;
