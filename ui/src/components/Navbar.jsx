import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Movies</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/movies">
                            <NavLink>Manage Movies</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/categories">
                            <NavLink>Manage Categories</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Home;
