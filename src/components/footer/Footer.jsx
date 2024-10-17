import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import "./Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
   <footer className='border-top py-2 mt-5'>
    <Container>
        <Row>
            <Col md={6}>
            <p className='m-0'>All right reserved copy right © 2024 </p>
            </Col>
            <Col md={6} className='d-flex justify-content-end'>
            <p className='m-0'>Developed by 
              <a href="https://www.linkedin.com/in/chandan-verma-6663a5a3" target='blank'>  Chandan Verma</a>
              </p>
            </Col>
        </Row>
    </Container>
   </footer>
  )
}

export default Footer
