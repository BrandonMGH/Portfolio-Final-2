import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class Node extends Component {

  state = {
    nodeProj: ProjectObject.NodeProj,
  }

  render() {
 
    const nodeProj = this.state.nodeProj
     
    return (
     
       <LightSpeed left>
        <h3 className="projBorder">NODE PROJECTS</h3> 
        <Row>
          <Col>
          {nodeProj.map(properties => (
            <span>
                <a href={properties.portfolioLinkOne}>
                  <span>
                  <img src={properties.pictureOne} className="ProjectCol imgBorder hover" />
                  </span>
                  </a>
              
            </span>
          ))}

          </Col>
        </Row>
        <Row>
          <Col>
            {nodeProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubOne}>GitHub Link</a>
              </span>
            ))}
          </Col>

        </Row>
        <Row>
          <Col>
          {nodeProj.map(properties => (
            <span>
                <a href={properties.portfolioLinkTwo}>
                  <span>
                  <img src={properties.pictureTwo} className="ProjectCol imgBorder hover" />
                  </span>
                  </a>
              
            </span>
          ))}

          </Col>
        </Row>
        <Row>
          <Col>
            {nodeProj.map(properties => (
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

export default Node;