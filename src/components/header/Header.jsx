import React from "react";
import "./header.css";
import HeaderBtn from "./HeaderBtn";
import HeaderSocials from "./HeaderSocials";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/profile-2.jpg";

const Header = () => {
  return (
    <div className="header">
      <Container className=" ">
        <Row className="">
          <Col lg={6} sm={12} className="d-flex justify-content-center align-items-center">
            <div className="header_text">
              <h5> Hello I'm</h5>
              <h1> SM FEROJ </h1>
              <div className="header_intro">
                <h5 className="text-light animate__animated animate__fadeIn animate__slower animate__infinite	infinite">
                  Fullstack Web Developer
                </h5>
              </div>
              <HeaderBtn />
            </div>
          </Col>

          <Col lg={2}>
            <div className="partition">
              <div className="line"></div>
            </div>
          </Col>

          <Col lg={4}>
            <div className="header_img ">
              <img
                src={myImg}
                className="img-fluid mx-auto d-block "
                alt="myimg"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="header_social">
        <HeaderSocials className="header_socials" />
      </div>
    </div>
  );
};

export default Header;
