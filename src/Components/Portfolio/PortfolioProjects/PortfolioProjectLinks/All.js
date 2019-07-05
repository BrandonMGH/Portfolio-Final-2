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
      
          <h3 className="projBorder">TOP PROJECTS</h3> 
          {TopProj.map(properties => (
            <div>
              <Col xs={12} md={4}  className="ProjectCol">
                  <div> 
                  <a href={properties.portfolioLink }><img src={properties.picture} className="imgBorder hover" width="250" height="200" /></a>  
                  <h4 className="text" >{properties.paragraph}</h4>
                  <a href={properties.github} class="githubLink">Github Link</a> 
                  </div>
              </Col>
            
            </div>
          ))}

      

        </LightSpeed>
    
      

    );
  }
}

export default All;