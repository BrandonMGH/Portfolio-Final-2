import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class HTMLCSSJS extends Component {

  state = {
    javascriptProj: ProjectObject.javascriptProj,

  }





  render() {

    const javascriptProj = this.state.javascriptProj

    return (

      <LightSpeed left>
        <h3 className="projBorder">HTML/CSS/JAVASCRIPT PROJECTS</h3>
        <Row>
          <Col>
            {javascriptProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkOne}>
                    <img src={properties.pictureOne} className="ProjectCol imgBorder hover" />
                </a>
              </span>
            ))}
          </Col>

        </Row>
        <Row>
          <Col>
            {javascriptProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubOne}>GitHub</a>
              </span>
            ))}
          </Col>

        </Row>
        <Row>
          <Col>
            {javascriptProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkTwo}>
                    <img src={properties.pictureTwo} className="ProjectCol imgBorder hover" />
                </a>
              </span>
            ))}
          </Col>

        </Row>
        <Row>
          <Col>
            {javascriptProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubTwo}>GitHub Link</a>
              </span>
            ))}
          </Col>

        </Row>
      </LightSpeed>



    );
  }
}

export default HTMLCSSJS;