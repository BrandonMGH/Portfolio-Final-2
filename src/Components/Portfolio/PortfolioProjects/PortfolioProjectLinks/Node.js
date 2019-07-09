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
              
                <a href={properties.portfolioLink}>
                  <span>
                  <img src={properties.picture} className="ProjectCol imgBorder hover" />
                  </span>
                  </a>
                  {/* <h4 className="text">{properties.paragraph}</h4>
                  <a href={properties.github} class="githubLink">Github Link</a> */}
              
            </span>
          ))}

          </Col>
        </Row>
        </LightSpeed>
      
      

    );
  }
}

export default Node;