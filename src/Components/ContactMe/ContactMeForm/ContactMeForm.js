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
        {contactFormObj.map(properties =>(
            <div>
                <img src={properties.image}></img>
            </div>
        ))

/* <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top"><img src={EmailImage} ></img></a>

<a href="https://github.com/BrandonMGH"><img src={GitHubMark} id="footerIcon" height="50" width="50"></img></a>
<a href="https://www.linkedin.com/in/brandon-harris-471bb932/"><img src={linkedinlogo} id="footerIcon" height="50" width="50"></img></a> */}

  </div>

    );
  }
}

export default ContactMeForm;