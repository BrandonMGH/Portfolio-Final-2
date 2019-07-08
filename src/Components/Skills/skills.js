import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './skills.css'
import skillsObject from './skillsobject'






class Skills extends Component {

  state = {
    skillsObj: [skillsObject.skillsArrayOne, skillsObject.skillsArrayTwo]
  }


  render() {

    const skillsObj = this.state.skillsObj
    return (<span>
      <Container >
        <Row>
          <Col></Col>
          <Col><h1 className="SkillsTitle">-SKILLS-</h1></Col>
          <Col></Col>
        </Row>
        <Row>

          <Col >
         
            {skillsObj[0].map(properties => (
                
            
              <img src={properties.image} className="SkillsCol" alt="Skills" />
                
                
            ))}
            
          </Col>

        </Row>
        <Row>
          <Col>
            {skillsObj[1].map(properties => (
              <span>

                <img src={properties.image} className="SkillsCol" alt="Skills"  />
              </span>
            ))}
          </Col>
        </Row>
      </Container>

    </span >
    );
  }
}

export default Skills;