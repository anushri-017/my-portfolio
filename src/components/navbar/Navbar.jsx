import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/icons/mylogo.jpeg';
import "./my-navbar.styles.css"; 

const MyNavbar = () => {
    return (
        <> 
        
            <Navbar  fixed="top"
                    variant="dark" 
                    collapseOnSelect 
                    expand="lg" 
                    bg="dark"
                    className="animate-navbar nav-theme justify-content-between" 
                    >
                <Navbar.Brand href="#home">
                    <img className="logo" src = {logo} alt="my portfoilio logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#internship">Internship</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       
        </>
    )
}

export default MyNavbar;
