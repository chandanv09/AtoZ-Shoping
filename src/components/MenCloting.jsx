import React, { useState , useEffect } from 'react'
import { Items } from "./Data";
import Itemlist from './itemlist/Itemlist';
import { Container } from 'react-bootstrap';
function MenCloting() {
  const [menData , setMenData] = useState([])
  useEffect(() => {
    const menProduct = Items.filter((item) => item.category === "men-clothing");
    setMenData(menProduct);
  }, []);
 
  return (
    <div className='my-4'>
      
       <Container>
      <h4>Men's Clothings </h4>
      </Container>
      <Itemlist Items={menData}/>
    </div>
  )
}

export default MenCloting

