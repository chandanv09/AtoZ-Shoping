import React, { useState, useEffect } from "react";
import { Items } from "./Data";
import Itemlist from "./itemlist/Itemlist";
import { Col, Container, Form, Row } from "react-bootstrap";

function MenClothing(props) {
  const [menData, setMenData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    const menProduct = Items.filter((item) => item.category === "men-clothing");
    setMenData(menProduct);
    setFilteredData(menProduct); 
  }, []);

  useEffect(() => {
   
    if (selectedPrices.length > 0) {
      const filtered = menData.filter(item =>
        selectedPrices.some(price => item.price <= price)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(menData);
    }
  }, [selectedPrices, menData]);

  const togglePriceFilter = (price) => {
    setSelectedPrices(prev => {
      if (prev.includes(price)) {
        return prev.filter(p => p !== price); 
      } else {
        return [...prev, price]; 
      }
    });
  };

  return (
    <div className="my-4">
      <Container>
        <Row>
          <Col>
            <h4>Men's Clothing</h4>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="pr-0">
            <div className="card filter my-4 p-3 h-100">
              <h6>Filter</h6>
              <ul>
                {[500, 1000, 1500, 2000].map(price => (
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

export default MenClothing;
