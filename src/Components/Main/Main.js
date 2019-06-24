import React, { Component } from "react";
import ScrollIntoView from 'react-scroll-into-view'
import Container from 'react-bootstrap/Container'
import './Main.css'

//**PAGES**//

import Title from '../Title/Title'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/skills'
import Bufferzone from '../Bufferzone/Bufferzone'
import Portfolio from '../Portfolio/Portfolio'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../Footer/Footer'





class Main extends Component {


  render() {
    return (
<Container>
    <nav role="navigation">
      <div id="menuToggle">

       <input type="checkbox"/> 

        <span></span>
        <span></span>
        <span></span>


        <ul id="menu">
          <ScrollIntoView selector=".AboutMeScroll"><a><li id="pointer">About</li></a></ScrollIntoView>
          <ScrollIntoView selector=".SkillsScroll"><a><li id="pointer">Skills</li></a></ScrollIntoView>
          <ScrollIntoView selector=".PortfolioScroll"><a><li id="pointer">Portfolio</li></a></ScrollIntoView>
          <ScrollIntoView selector=".ContactMeScroll"><a><li id="pointer">Contact</li></a></ScrollIntoView>
          <ScrollIntoView selector=".TitleScroll"><a><li>Return to Top</li></a></ScrollIntoView>
        </ul>
      </div>
    </nav>

    <div className="TitleScroll"><Title /></div>
    <div className="AboutMeScroll"><AboutMe /></div>
    <div className="SkillsScroll"><Skills /></div>
    <div><Bufferzone /></div>
    <div className="PortfolioScroll" ><Portfolio /></div>
    <div className="ContactMeScroll"><ContactMe /></div>
    <div><Footer /></div>

  
  </Container>

    )
  }
}

export default Main;
