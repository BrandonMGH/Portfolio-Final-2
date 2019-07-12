import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import got2 from './Images/got2.jpg'
import chatbox from './Images/chatbox.jpg'
import cameragirl from './Images/cameragirl.jpg'
import codeall from './Images/codeall.jpg'
import './PortfolioProjects.css'
import All from '../PortfolioProjects/PortfolioProjectLinks/All'
import HTMLCSSJS from '../PortfolioProjects/PortfolioProjectLinks/HTMLCSSJSprojects'
import Node from '../PortfolioProjects/PortfolioProjectLinks/Node'
import ReactProj from '../PortfolioProjects/PortfolioProjectLinks/React'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





class PortfolioProjects extends Component {

  state = {

    shownProject: <All />
  };

  handleButtonClickOne = () => {
    this.setState({ shownProject: <HTMLCSSJS /> })
  }
  handleButtonClickTwo = () => {
    this.setState({ shownProject: <Node /> })
  }
  handleButtonClickThree = () => {
    this.setState({ shownProject: <ReactProj /> })
  }
  handleButtonClickFour = () => {
    this.setState({ shownProject: <All /> })
  }

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <h1 className="portfolioProjectTitle" align="middle">-PORTFOLIO-</h1>
            <Row >
              <Col >
                <div onClick={this.handleButtonClickOne} className="box">
                  <img className="CarouselImg" src={got2} align="middle"></img>
                  <div className="text">
                    <h2>JAVASCRIPT PROJECTS</h2>

                  </div>
                </div>
              </Col>
              <Col>
                <div onClick={this.handleButtonClickTwo} className="box">
                  <img className="CarouselImg" src={chatbox} align="middle"></img>
                  <div className="text">
                    <h2>NODE PROJECTS</h2>
                  </div>
                </div>
              </Col>
              <Col>
                <div onClick={this.handleButtonClickThree} className="box">
                  <img className="CarouselImg" src={cameragirl} align="middle"></img>
                  <div className="text">
                    <h2>REACT PROJECTS</h2>
                  </div>
                </div>
              </Col>
              <Col>
                <div onClick={this.handleButtonClickFour} className="box">
                  <img className="CarouselImg" src={codeall} align="middle"></img>
                  <div className="text">
                    <h2>FAVORITE PROJECTS</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <div className="White">{this.state.shownProject}</div>
        </Row>
      </Container>
    );
  }
}

export default PortfolioProjects;