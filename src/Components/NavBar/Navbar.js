import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import ScrollIntoView from 'react-scroll-into-view'
import './Navbar.css'


export default class NavigationBar extends Component {
    render() {
        return (
            <div className="fixed"> 
                <Navbar bg="dark" expand="lg" >
                    <Navbar.Brand >My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                             <ScrollIntoView selector=".AboutMeScroll"><Nav.Link>About Me</Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".SkillsScroll"><Nav.Link>Skills</Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".PortfolioScroll"><Nav.Link>Portfolio</Nav.Link></ScrollIntoView>
                             <ScrollIntoView selector=".ContactMeScroll"><Nav.Link>Contact Me</Nav.Link></ScrollIntoView>
                        </Nav>
                        <Form inline>
                        <ScrollIntoView selector=".TitleScroll"><Nav.Link>Back to the Top</Nav.Link></ScrollIntoView>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
}

