import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const AppLayout = () => {
    const navigate = useNavigate();

    return (
        <div className='main'>
            <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#" onClick={() => navigate("/")}>
                        <img width={150} src="/siya_logo.png"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            id="navbar-menu"
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate("/")}>HOME</Nav.Link>
                            <Nav.Link onClick={() => navigate("/movies")}>MOVIE</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="search-box"
                                aria-label="Search"
                            />
                            <Button id="button" variant="none">
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} />
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default AppLayout
