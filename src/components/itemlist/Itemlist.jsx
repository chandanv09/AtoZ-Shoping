import React, { useContext, useEffect, useState } from "react";
import Item from "../Item/Item";
import { Button, Container, Row } from "react-bootstrap";
import Loader from "../Loader";

function Itemlist(props) {
  const [loading, setLoading] = useState(false);
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("scrollTop");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <Container className="my-3">
        <Row>
          {loading ? (
            <Loader />
          ) : props.Items.length > 0 ? (
            props.Items.map((item, index) => (
              <Item
                key={item.id}
                discription={item.description}
                url={item.image}
                title={item.title}
                rating={item.rating}
                price={item.price}
                id={item.id}
              />
            ))
          ) : (
            <div className="col-12">
              <p>No Products</p>
            </div>
          )}
        </Row>
      </Container>

      <Button style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
        }} onClick={backToTop} variant="danger rounded-5 btn-sm" id='scrollTop'><i class="bi bi-caret-up-fill"></i> </Button>
    </>
  );
}

export default Itemlist;
