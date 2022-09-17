import React from 'react';
import '../../components/portfolio/portfolio.css'
import { Container, Row, Col } from "react-bootstrap";
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'



const Portfolio = () => {
  return (
      <div id="portfolio">
      <Container>
        <h5> My Recent Work</h5>
        <h2> Portfolio</h2>
        <Row className="portfolio_container ">
          <Col className="portfolio_card">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3> This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/smferoj" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://usergithubsm.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </Col>
          <Col className="portfolio_card">
            <div className="portfolio_item-image">
              <img src={IMG2} alt="" />
            </div>
            <h3> This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/smferoj" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://hoobanksm.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </Col>

          <Col className="portfolio_card">
            <div className="portfolio_item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3> This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/smferoj" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://shoecardsm.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </Col>
          <Col className="portfolio_card">
            <div className="portfolio_item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3> This is a portfolio item title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/smferoj" className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href="https://hoobanksm.netlify.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </Col>
        </Row>
      </Container>
   
      </div>
  )
}

export default Portfolio