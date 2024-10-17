import React, { useEffect, useState } from "react";
import Itemlist from './itemlist/Itemlist';
import { Items } from "./Data";
import { Container } from "react-bootstrap";
function Jwellery() {
  const [jwelleryData , setJwelleryData] = useState([])
  useEffect(() => {
    const jwelleryProduct = Items.filter((item) => item.category === "jewelery");
    setJwelleryData(jwelleryProduct);
  }, []);
  return (
    <div className="my-3">
      
      <Container>
      <h4>Jwellery</h4>
      </Container>
      <Itemlist Items={jwelleryData}/>
    </div>
  )
}

export default Jwellery
