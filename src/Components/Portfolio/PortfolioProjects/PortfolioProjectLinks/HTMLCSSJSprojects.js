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

    const javascriptProj = this.state.javascriptProj
    const hoverImageOne = this.state.hoverImageOne
    const hoverImageTwo = this.state.hoverImageTwo

    return (

      <section className="featured-rooms-center">
        {javascriptProj.map(properties => (
                <a href={properties.portfolioLink}>
                <img src={hoverImageOne ?  properties.pictureText : properties.picture} onMouseOver={this.handleOnHoverOne} onMouseOut={this.handleNoHoverOne}  className="ProjectCol imgBorder hover" />
                </a>
            ))}
      </section>

      // <LightSpeed left>
      //   <h3 className="projBorder">HTML/CSS/JAVASCRIPT PROJECTS</h3>
      //   <Row>
      //     <Col>
      //       {javascriptProj.map(properties => (
      //         <span>
      //           <a href={properties.portfolioLinkOne}>
      //           <img src={hoverImageOne ?  properties.pictureTextOne : properties.pictureOne} onMouseOver={this.handleOnHoverOne} onMouseOut={this.handleNoHoverOne}  className="ProjectCol imgBorder hover" />
      //           </a>
      //         </span>
      //       ))}
      //     </Col>

      //   </Row>
      //   <Row>
      //     <Col>
      //       {javascriptProj.map(properties => (
      //         <span>
      //           <a className="test ProjectCol2" href={properties.githubOne}><Button variant="dark">Github Link</Button></a>
      //         </span>
      //       ))}
      //     </Col>

      //   </Row>
      //   <Row>
      //     <Col>
      //       {javascriptProj.map(properties => (
      //         <span>
      //           <a href={properties.portfolioLinkTwo}>
      //           <img src={hoverImageTwo ?  properties.pictureTextTwo : properties.pictureTwo} onMouseOver={this.handleOnHoverTwo} onMouseOut={this.handleNoHoverTwo}  className="ProjectCol imgBorder hover" />
      //           </a>
      //         </span>
      //       ))}
      //     </Col>

      //   </Row>
      //   <Row>
      //     <Col>
      //       {javascriptProj.map(properties => (
      //         <span>
      //           <a className="test ProjectCol2" href={properties.githubTwo}><Button variant="dark">Github Link</Button></a>
      //         </span>
      //       ))}
      //     </Col>

      //   </Row>
      // </LightSpeed>



    );
  }
}

export default HTMLCSSJS;