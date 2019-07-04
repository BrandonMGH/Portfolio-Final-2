import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from  './me.jpg'
import AstroBearLogo from'./AstroBearLogo.png'
import AstroBearLogoInverse from'./AstroBearLogoInverse.png'
// import './AboutMe.css'
import './AboutMeInfo.css'





class AboutMeInfo extends Component {
    render() {
        return (
            <div className="AboutMeContainer">
                <h1 className="AboutMe">- ABOUT ME - </h1>
                <img src={AstroBearLogoInverse} className="AboutMeImg" alt="me" />
                <p className="AboutMe">I am a Full Stack Web Developer with a certificate of completion from the UC San Diego Bootcamp Extension Course.  I specialize in the creation of dynamic websites that emphasize ease of use and timely responsiveness</p>
            </div>
           
            
        );
    }
}

export default AboutMeInfo;