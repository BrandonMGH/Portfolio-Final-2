import React, { Component } from "react";
// import GoogleFontLoader from 'react-google-font-loader';
import Bounce from 'react-reveal/Bounce';
import AstroBearLogo from './Images/AstroBearLogo.png'


class Title extends Component {
  
  render() {
    
    return (
      
      <div className="title">
        {/* <Bounce Top><img src={AstroBearLogo} className=" AstroBearLogo"></img></Bounce> */}
        <Bounce Top><h1 className="titleText">Brandon Harris</h1></Bounce>
        
        <Bounce Bottom><h2 className="titleText">Full Stack Web Developer</h2></Bounce>
      </div>
    );
  }
}

export default Title;