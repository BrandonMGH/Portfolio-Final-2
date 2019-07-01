import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class HTMLCSSJS extends Component {

  state = {
    javascriptProj: ProjectObject.javascriptProj,

  }





  render() {

    const javascriptProj = this.state.javascriptProj

    return (
      <Container>
        <LightSpeed left>
          <Row>
            <h3 className="projBorder">HTML/CSS/JAVASCRIPT PROJECTS</h3>
            {javascriptProj.map(properties => (
              <div>
                <Col xs={12} md={4} className="ProjectCol">
                    <div>
                    <a href={properties.portfolioLink}><img src={properties.picture} className="imgBorder hover" width="250" height="200" /></a>
                      <h4 className="text" >{properties.paragraph}</h4>
                      <a href={properties.github} class="githubLink">Github Link</a> 
                    </div>
                 
                </Col>
              </div>
            ))}

          </Row>
        </LightSpeed>
      </Container>


    );
  }
}

export default HTMLCSSJS;