import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => {
    const style = {
        backgroundColor: '#234082',
        color: 'white'
    }
    return (
            <Navbar inverse collapseOnSelect style={style}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>Bienvenidos</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default NavBar;