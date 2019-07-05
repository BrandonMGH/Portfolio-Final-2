import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './Navbar.css'


export default class NavigationBar extends Component {
    render() {
        return (
            <div className="fixed"> 
                <Navbar bg="dark" expand="lg" >
                    <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">About Me</Nav.Link>
                            <Nav.Link href="#link">Skills</Nav.Link>
                            <Nav.Link href="#link">Portfolio</Nav.Link>
                            <Nav.Link href="#link">Contact Me</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Nav.Link href="#link">Back to the Top</Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
}

