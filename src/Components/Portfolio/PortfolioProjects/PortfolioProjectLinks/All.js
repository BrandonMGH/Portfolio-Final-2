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
    hoverImageOne: false,
    hoverImageTwo: false,  
  }

handleOnHoverOne = () =>{
    this.setState({hoverImageOne:true})
}

handleOnHoverTwo = () =>{
  this.setState({hoverImageTwo:true})
}

handleNoHoverOne = () =>{
  this.setState({hoverImageOne:false})
}

handleNoHoverTwo = () =>{
  this.setState({hoverImageTwo:false})
}



  render() {

    const TopProj = this.state.TopProj
    const hoverImageOne = this.state.hoverImageOne
    const hoverImageTwo = this.state.hoverImageTwo
    
    


    return (
     
      <LightSpeed left>
        <h3 className="projBorder">FAVORITE PROJECTS</h3>
        <Row>
          <Col>
            {TopProj.map(properties => (
              <span>
                <a href={properties.portfolioLinkOne}>
                <img src={hoverImageOne ?  properties.pictureTextOne : properties.pictureOne} onMouseOver={this.handleOnHoverOne} onMouseOut={this.handleNoHoverOne}  className="ProjectCol imgBorder hover" /></a>
              
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
                <img src={hoverImageTwo ?  properties.pictureTextTwo : properties.pictureTwo} onMouseOver={this.handleOnHoverTwo} onMouseOut={this.handleNoHoverTwo}  className="ProjectCol imgBorder hover" /></a>
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
      </LightSpeed>
      


    );
  }
}

export default All;