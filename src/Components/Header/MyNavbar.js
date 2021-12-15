import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className="navbar-class"  fixed="top">
            <Container>
            <Navbar.Brand href="/">Arjun Baidya</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="navlink" to="/education">Education</NavLink>
                <NavLink className="navlink" to="/experience">Experience</NavLink>
                <NavLink className="navlink" to="/projects">Projects</NavLink>
                <NavLink className="navlink" to="/projects">Open Source</NavLink>
                </Nav>
                <Nav>
                <NavLink className="navlink" to="/contact">Contact Me</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
