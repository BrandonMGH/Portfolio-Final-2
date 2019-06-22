import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './skills.css'
import skillsObject from './skillsobject'






class Skills extends Component {

    state = {
      skillsObj: skillsObject.skillsArray
    }
  

  render() {

    const skillsObj = this.state.skillsObj
    return (
    <div >
      <h1 className="SkillsTitle">-SKILLS-</h1>
      {skillsObj.map(properties =>(
        <div className="SkillsCol">
          <h3>{properties.title}</h3>
          <img src={properties.image} />
        </div>
      ))

      }
        
    </div>
    );
  }
}

export default Skills;