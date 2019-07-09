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
            {TopProj.map(properties => (<span>
              <a href={properties.portfolioLink} ><img src={properties.picture} className="ProjectCol imgBorder hover" /></a>
              {/* <h4 className="text ProjectCol" >{properties.paragraph}</h4>
                  <a href={properties.github} class="githubLink ProjectCol">Github Link</a>  */}
            </span>
            ))}
          </Col>
        </Row>
      </LightSpeed>



    );
  }
}

export default All;