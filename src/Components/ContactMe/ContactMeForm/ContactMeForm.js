import React, { Component } from "react";
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
        {contactFormObj.map(properties => (
          <div className="contactMeIconContainer">
            <a href={properties.link}><img src={properties.image} className="contactMeIcon"></img></a>
            <a href={properties.link}><h3>{properties.text}</h3></a>
          </div>
        ))};

      </div>

    );
  }
}

export default ContactMeForm;