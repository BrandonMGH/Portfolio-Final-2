import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
            {reactProj.map(properties => (
              <div>
                <Col xs={12} md={4} className="ProjectCol">
                  <a href={properties.portfolioLink}><img src={properties.picture} className="imgBorder hover" width="250" height="200" /></a>
                    <p className="text">{properties.paragraph}</p>
                    <a href={properties.github} class="githubLink">Github Link</a>
                </Col>
              </div>
            ))}


        </LightSpeed>
  


    );
  }
}

export default ReactProj;