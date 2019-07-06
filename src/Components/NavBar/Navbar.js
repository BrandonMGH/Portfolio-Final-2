import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import ScrollIntoView from 'react-scroll-into-view'
import './Navbar.css'


export default class NavigationBar extends Component {
    render() {
        return (
            <div className="fixed"> 
                <Navbar bg="dark" className="color"expand="lg" >
                    <Navbar.Brand ><span className="textColor">My Portfolio</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                             <ScrollIntoView selector=".AboutMeScroll"><Nav.Link><span className="textColor">About Me</span></Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".SkillsScroll"><Nav.Link><span className="textColor">Skills</span></Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".PortfolioScroll"><Nav.Link><span className="textColor">Portfolio</span></Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".ContactMeScroll"><Nav.Link><span className="textColor">Contact Me</span></Nav.Link></ScrollIntoView>
                        </Nav>
                        <Form inline>
                        <ScrollIntoView selector=".TitleScroll"><Nav.Link><span className="textColor">Back to the Top</span></Nav.Link></ScrollIntoView>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
}

