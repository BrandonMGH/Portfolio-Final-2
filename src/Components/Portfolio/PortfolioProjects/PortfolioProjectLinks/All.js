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
      <Container>
        <LightSpeed left>
        <Row>
          <h3 className="projBorder">Top Projects</h3> 
          {TopProj.map(properties => (
            <div>
              <Col xs={12} md={4} className="ProjectCol hover">
                <a href={properties.portfolioLink}>
                  <div> 
                  <img src={properties.picture} className="imgBorder"  width="250" height="200" />
                  <p className="text" >{properties.paragraph}</p>
                  </div>
                </a>   
              </Col>
            </div>
          ))}

        </Row>

        </LightSpeed>
      </Container>
      

    );
  }
}

export default All;