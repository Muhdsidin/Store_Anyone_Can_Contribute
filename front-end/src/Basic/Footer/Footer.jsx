import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"

export const Footer = ()=>{
    return(
        <footer className="footer bg-black" style={{color:"white", fontFamily:"sans-serif"}}> <br />
      <Container>
        <Row>
          <Col md={6}>
            <p>Our Company Details</p>
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio voluptas reprehenderit hic, tempore, ipsum, eligendi iste sapiente officia impedit culpa explicabo optio veniam voluptatum. Animi architecto harum deserunt beatae.
            Tenetur pene delectus corrupti doloribus laboriosam qui quod, voluptas dolorum nulla accusamus non aliquid nostrum vero optio, alias praesentium amet iusto, incidunt voluptates! Cumque, possimus quis.
          </Col>
          <Col md={6}>
            <p>Join Our Channels </p>
            <span>Below mentioned</span>
            <Container className='co' >
              <span><FaInstagram /></span>
              <span><FaFacebook /></span>
              <span><FaTwitter /></span>
              <span><FaWhatsapp /></span>
            </Container>
          </Col>
        </Row>
      </Container><br />
    </footer>
    )
}