import React from "react";
import "./footer.css";
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import{AiFillTwitterCircle} from 'react-icons/ai'
import { Container, Row, Col } from "react-bootstrap";
import HeaderSocials from "../header/HeaderSocials";


const Footer = () => {
  return (
    <div className="footer">
     <Container>
    <Row>
   <Col lg={2}>
   <a href="#" className="footer_logo">
        SM Feroj </a>
   </Col>
    
    <Col lg={5}>
     
     <ul className="permalinks">
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contcat</a></li>
      </ul>
     </Col>
      
     <Col lg={2}> 
     <div className="footer_socials">
      <HeaderSocials/>
      </div>
     </Col>

     <Col lg={3}> 
     <div className="footer_copyright">
      <small>&copy; smFeroj. All rights reserved.</small>  
      </div>
     </Col> 
     
      </Row>
      </Container>
      </div>
      
  );
};

export default Footer;
