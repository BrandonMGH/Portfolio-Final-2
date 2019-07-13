import React, { Component } from "react";
import LightSpeed from 'react-reveal/LightSpeed';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './PortfolioProjectlinks.css'
import ProjectObject from './PortfolioProjectlinkobject'






class All extends Component {

  state = {
    TopProj: ProjectObject.TopProj,
    shownProject: null,
    hoverImage: false, 
  }

handleOnHover = () =>{
  this.setState({hoverImage:true})
}
handleNoHover = () =>{
  this.setState({hoverImage:false})
}



  render() {

    const TopProj = this.state.TopProj
    const hoverImage = this.state.hoverImage
    console.log(this.state.hoverImage)
    


    return (
     
      <LightSpeed left>
        <h3 className="projBorder">FAVORITE PROJECTS</h3>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkOne}>
                  <img src={properties.pictureOne} className="ProjectCol imgBorder hover" /></a>
              
              </span>
              
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubOne}> <Button variant="dark">Github Link</Button></a>
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkTwo}>
                  <img src={properties.pictureTwo} className="ProjectCol imgBorder hover" /></a>
              </span>    
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a className="test ProjectCol2" href={properties.githubTwo}> <Button variant="dark">Github Link</Button></a>
              </span>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkTwo}>
                  <img src={hoverImage ?  properties.pictureTwo : properties.pictureOne} onMouseOver={this.handleOnHover} onMouseOut={this.handleNoHover}  className="ProjectCol imgBorder hover" /></a>
              </span>    
            ))}
          </Col>
        </Row>

      </LightSpeed>
      


    );
  }
}

export default All;