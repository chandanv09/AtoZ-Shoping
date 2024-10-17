import React, { useEffect, useState } from "react";
import Itemlist from "./itemlist/Itemlist";
import { Items } from "./Data";
import { Container } from "react-bootstrap";

function WomenClothing() {
  const [womenData, setWomenData] = useState([]);
  useEffect(() => {
    const womenProduct = Items.filter(
      (item) => item.category === "women-clothing"
    );
    setWomenData(womenProduct);
  }, []);
  return (
    <div className="my-3">
      <Container>
        <h4>Women's Clothings </h4>
      </Container>
      <Itemlist Items={womenData} />
    </div>
  );
}

export default WomenClothing;
