import React, { useEffect, useState } from "react";
import Itemlist from './itemlist/Itemlist';
import { Items } from "./Data";
import { Container } from "react-bootstrap";

function Electronices() {
  const [electronicsData , setElectronicsData] = useState([])
  useEffect(() => {
    const eletronicsProduct = Items.filter((item) => item.category === "electronics");
    setElectronicsData(eletronicsProduct);
  }, []);
  return (
    <div className="my-3">
      <Container>
      <h4>Electronics </h4>
      </Container>
      
      <Itemlist Items={electronicsData}/>
    </div>
  )
}

export default Electronices
