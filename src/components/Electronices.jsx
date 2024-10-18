import React, { useEffect, useState } from "react";
import Itemlist from './itemlist/Itemlist';
import { Items } from "./Data";
import { Col, Collapse, Container, Row , Form } from "react-bootstrap";

function Electronices() {
  const [electronicsData , setElectronicsData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  useEffect(() => {
    const eletronicsProduct = Items.filter((item) => item.category === "electronics");
    setElectronicsData(eletronicsProduct);
    setFilteredData(eletronicsProduct)
  }, []);

  useEffect(() => {
    if (selectedPrices.length > 0) {
      const filtered = electronicsData.filter((item) =>
        selectedPrices.some((price) => item.price <= price)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(electronicsData);
    }
  }, [selectedPrices, electronicsData]);

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
          <Col><h4>Electronics </h4></Col>
        </Row>

        <Row>
          <Col md={{span: 2 ,  order: 0}} xs={{span:12 , order:1}} className="pr-0">
            <div className="card filter my-4 p-3 vh-100 ">
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

            <div>
           
            </div>

            
          </Col>
          <Col md={{span: 10 , order:1}} xs={{span:12 , order:0}}>
            <Itemlist Items={filteredData} />
          </Col>
        </Row>
      
      </Container>
      
      
    </div>
  )
}

export default Electronices
