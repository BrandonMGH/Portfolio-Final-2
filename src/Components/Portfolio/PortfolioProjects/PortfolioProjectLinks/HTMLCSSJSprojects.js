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
                <a href={properties.portfolioLink}>
                  <span>
                    <img src={properties.picture} className="ProjectCol imgBorder hover" />

                    {/* <h4 className="text relative ProjectCol" >{properties.paragraph}</h4>
                    <a href={properties.github} class="text relative ProjectCol">Github Link</a> */}

                  </span>

                </a>




              </span>
            ))}
          </Col>

        </Row>
      </LightSpeed>



    );
  }
}

export default HTMLCSSJS;