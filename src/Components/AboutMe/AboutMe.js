import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './AboutMe.css'
import AboutMeInfo from './AboutMeInfo/AboutMeInfo'



class AboutMe extends Component {




  render() {
    return (
      <div className="AboutMeBackground">
       
        <AboutMeInfo />
    
      </div>

    );
  }
}

export default AboutMe;