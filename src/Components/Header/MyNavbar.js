import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navbar.css'

function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="navbar-class"  fixed="top">
            <Container>
            <Navbar.Brand href="#home">Arjun Baidya</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link href="#pricing">Education</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="#pricing">Open Source</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
