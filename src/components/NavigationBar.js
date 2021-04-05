import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class NavigationBar extends Component {
    render(props) {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    {this.props.title && <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginLeft: this.props.marginLeft}} className="mr-auto">
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </div>
        )
    }
}
