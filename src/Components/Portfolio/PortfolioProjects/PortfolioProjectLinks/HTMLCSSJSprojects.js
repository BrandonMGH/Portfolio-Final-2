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

  }

  handleOnHoverOne = () => {
    this.setState({ hoverImageOne: true })
  }

  handleOnHoverTwo = () => {
    this.setState({ hoverImageTwo: true })
  }

  handleNoHoverOne = () => {
    this.setState({ hoverImageOne: false })
  }

  handleNoHoverTwo = () => {
    this.setState({ hoverImageTwo: false })
  }



  render() {

    const javascriptProj = this.state.javascriptProj
    const hoverImageOne = this.state.hoverImageOne


    return (
      <LightSpeed left>


        <section className="portfolioProjects">
              {javascriptProj.map(properties => (
                <div>
                  <img src={hoverImageOne ? properties.pictureText : properties.picture} onMouseOver={this.handleOnHoverOne} onMouseOut={this.handleNoHoverOne} className="ProjectCol imgBorder hover" />
                  <h3>{properties.name}</h3>
                  <p>{properties.paragraph}</p>
                  <p><strong>Project Type:</strong></p>
                  <p><strong>My Role: </strong></p>
                  <section>
                    <a href={properties.portfolioLink}><button>Project Link</button></a>
                    <a href={properties.github}><button>GithubLink</button></a>
                  </section>
                </div>
              ))}
        </section>


      </LightSpeed>

    );
  }
}

export default HTMLCSSJS;