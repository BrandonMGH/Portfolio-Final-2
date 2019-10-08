import React, { Component } from "react";
import './Main.css'

//**PAGES**//
import NavigationBar from '../NavBar/Navbar'
import Title from '../Title/Title'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/skills'
import Bufferzone from '../Bufferzone/Bufferzone'
import Portfolio from '../Portfolio/Portfolio'
import ContactMe from '../ContactMe/ContactMe'
import Footer from '../Footer/Footer'





class Main extends Component {


  render() {

    const scrollIntoViewInfo = {
      Title: "TitleScroll",
      About: "AboutMeScroll",
      Skills: "SkillsScroll",
      Portfolio: "PortfolioScroll",
      Contact: "ContactMeScroll"
    }
    return (<div>
    
    <div><NavigationBar /></div>
    <div className={scrollIntoViewInfo.Title} title="" title><Title /></div>
    <div className={scrollIntoViewInfo.About}><AboutMe /></div>
    <div className={scrollIntoViewInfo.Skills}><Skills /></div>
    <div className={scrollIntoViewInfo.Portfolio}><Portfolio /></div>
    <div className={scrollIntoViewInfo.Contact}><ContactMe /></div>
    <div><Footer /></div>
    </div>
  


    )
  }
}

export default Main;
