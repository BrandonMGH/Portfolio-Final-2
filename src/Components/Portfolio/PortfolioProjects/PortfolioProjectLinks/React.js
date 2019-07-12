import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class ReactProj extends Component {

  state = {
    reactProj: ProjectObject.reactProj,
  }





  render() {


    const reactProj = this.state.reactProj

    return (

      <LightSpeed left>

        <h3 className="projBorder">REACT PROJECTS</h3>
        <Row>
          <Col>
            {reactProj.map(properties => (
              <span>
                <a href={properties.portfolioLink}>
                    <img src={properties.picture} className="ProjectCol imgBorder hover" />
                </a>
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {reactProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.github}><Button variant="dark">Github Link</Button></a>
              </span>
            ))}
          </Col>

        </Row>
      </LightSpeed>

    );
  }
}

export default ReactProj;