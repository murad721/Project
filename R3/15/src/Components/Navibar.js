import React from "react";
import { Nav, Navbar, Link, Button } from "react-bootstrap";

export default function Navibar() {
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="mr-2">Log In</Button>
                    <Button variant="primary">Sign out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    </>
 )
}