import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { Container, Row } from "react-bootstrap";
import Loader from "../Loader";

function Itemlist(props) {
  const [loading , setLoading] = useState(false);
  return (
    <div className="home">
      <Container className="my-3">
        <Row>
          {loading ? <Loader/> : props.Items.length > 0 ? 
          
          (props.Items.map((item, index) => (
            <Item
              key={item.id}
              discription={item.description}
              url={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              id={item.id}
            />
          ))):
          (
            <div className="col-12">
              <p>No Products</p>
            </div>
          )
        
        }
          
        </Row>
      </Container>
    </div>
  );
}

export default Itemlist;
