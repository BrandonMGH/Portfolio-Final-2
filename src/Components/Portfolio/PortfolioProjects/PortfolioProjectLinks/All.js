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

    const TopProj = this.state.TopProj
    const hoverImageOne = this.state.hoverImageOne
    const hoverImageTwo = this.state.hoverImageTwo




    return (

      <LightSpeed left>
        <section className="portfolioProjects">

          {TopProj.map(properties => (
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

export default All;