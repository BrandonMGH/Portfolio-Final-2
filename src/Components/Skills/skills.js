import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './skills.css'
import HTMLimage from '../Images/HTMLimage.png'
import CSSImage from '../Images/CSSimage.png'
import JSimage from '../Images/JSimage.png'
import Nodeimage from '../Images/Nodeimage.png'
import Databaseimage from '../Images/Databaseimage.png'
import Otherimage from '../Images/Otherimage.png'






class Skills extends Component {

    
  

  render() {
    return (
    <div className="SkillsBlack">
      
      <h1>-SKILLS-</h1>
     

      <Row >
        <Col md={4} className="SkillCol">
        <h3>HTML</h3>
       <img src={HTMLimage} className="SkillsImg" alt="me"/>
       </Col>
       <Col md={4} className="SkillCol">
       <h3>CSS</h3>
       <img src={CSSImage} className="SkillsImg2" alt="me"/>
       </Col>
       <Col md={4} className="SkillCol">
        <h3>JavaScript</h3>
       <img src={JSimage} className="SkillsImg3" alt="me"/>
       </Col>
       </Row>
       <Row>
        <Col md={4} className="SkillCol">
        <h3>Node</h3>
       <img src={Nodeimage} className="SkillsImg" alt="me"/>
       </Col>
       <Col md={4} className="SkillCol">
        <h3>Database Technology</h3>
       <img src={Databaseimage} className="SkillsImg2" alt="me"/>
       </Col>
       <Col md={4} className="SkillCol">
       <h3>Other</h3>
       <img src={Otherimage} className="SkillsImg3" alt="me"/>
       </Col>
       </Row>
        
    </div>
    );
  }
}

export default Skills;