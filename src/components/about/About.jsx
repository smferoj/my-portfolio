import React from "react";
import "./about.css";
import MyImgTwo from "../../assets/my-profile.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheckSquare } from "react-icons/bs";

const About = () => {
  return (
    <div id="about">
      <Container >
        <Row>
          <h5> Get To Know </h5>
          <h2> About Me</h2>
          <Col lg={5} className="d-flex pt-5 pb-5 img_sec ">
            <div className="about_img_section  ">
              <div className="about_me">
                <div className="about_me-image">
                  <img
                    src={MyImgTwo}
                    className="img-fluid d-flex ms-auto"
                    alt="myprofileimg-2"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} className="d-flex flex-column pt-3">
            <div className="about_text">
              <p>
                I am working as per a full-stack web developer for processing,
                analyzing, and rendering data visually. I always try to use
                well-establised rationalised softwares and tools that keeps the
                project in pace with present times. It is my utmost trying to
                manage time-sensitive updates, including content changes as well
                as database upgradations.
              </p>
              <div className="about_btn">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </div>
            </div>
            <div className="about_cards">
              <article className="about_card">
                <h3> Key Features </h3>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Creativity{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Analysing{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Problem Solving{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Updating{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Time Managing{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Frequent Revising{" "}
                </p>
              </article>
              <article className="about_card">
                <h3> Major Skills </h3>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> BootStrap{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> JavaScript{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Material UI{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> React Js{" "}
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Express Js
                </p>
                <p>
                  {" "}
                  <BsCheckSquare className="feature_icon" /> Mongo DB{" "}
                </p>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
