import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contactFormObject from "./ContactMeFormObject.js"
import './ContactMeForm.css'



class ContactMeForm extends Component {

  state = {
    contactFormObj: contactFormObject.contactFormArray
  }

  render() {

    const contactFormObj = this.state.contactFormObj

    return (
      <div className="contactMeContainer">
        <h1 className="text-center">-Contact Me-</h1>
        <Row> 
          <Col>
        {contactFormObj.map(properties => (
          <span className="contactMeIconContainer">
            <a href={properties.link}><img src={properties.image} className="contactMeIcon"></img></a>
            {/* <a href={properties.link}><h3>{properties.text}</h3></a> */}
          </span>
        ))}
        </Col>
      </Row>
      <Row> 
          <Col>
        {contactFormObj.map(properties => (
          <span className="textContainer">
            <a  href={properties.link}><h3>{properties.text}</h3></a>
          </span>
        ))}
        </Col>
      </Row>
      </div>

    );
  }
}

export default ContactMeForm;