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
          {nodeProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol">
                <a href={properties.portfolioLink}><img src={properties.picture} className="imgBorder hover" width="250" height="200" /></a>
                  <h4 className="text">{properties.paragraph}</h4>
                  <a href={properties.github} class="githubLink">Github Link</a>
              </Col>
            </div>
          ))}

    

        </LightSpeed>
      
      

    );
  }
}

export default Node;