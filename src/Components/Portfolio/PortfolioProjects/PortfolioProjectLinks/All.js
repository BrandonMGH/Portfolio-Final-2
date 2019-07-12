import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class All extends Component {

  state = {
    TopProj: ProjectObject.TopProj,

    shownProject: null
  }





  render() {

    const TopProj = this.state.TopProj



    return (

      <LightSpeed left>
        <h3 className="projBorder">FAVORITE PROJECTS</h3>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkOne}>
                  <img src={properties.pictureOne} className="ProjectCol imgBorder hover" /></a>
              
              </span>
              
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubOne}>GitHub Link</a>
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkTwo}>
                  <img src={properties.pictureTwo} className="ProjectCol imgBorder hover" /></a>
              </span>    
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
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

export default All;