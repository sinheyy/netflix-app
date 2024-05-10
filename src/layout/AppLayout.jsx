import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const AppLayout = () => {
    const [genre, setGenre] = useState("선택");
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchByKeyword = (event) => {
        event.preventDefault()
        // url을 바꿔주기

        if (genre == "영화") {
            navigate(`/movies?q=${keyword}`);
        }
        else if (genre == "TV") {
            navigate(`/tvs?q=${keyword}`);
        }

        setKeyword("");
    }

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
                            <Nav.Link onClick={() => navigate("/tvs")}>TV-SHOW</Nav.Link>

                        </Nav>

                        <Form className="d-flex" onSubmit={searchByKeyword}>
                            <Dropdown>
                                <Dropdown.Toggle className="search-box-genre" id="dropdown-basic">
                                    {genre}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { setGenre("영화") }}>영화</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { setGenre("TV") }}>TV</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form.Control
                                type="search"
                                placeholder="검색"
                                className="search-box"
                                aria-label="Search"
                                value={keyword}
                                onChange={(event) => setKeyword(event.target.value)}
                            />
                            <Button id="button" variant="none" type="submit">
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
