import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <div className="menu">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/blog">Blog</Nav.Link>
                                    <Nav.Link href="/ajuda">Ajuda</Nav.Link>
                                    <Nav.Link href="/usuarios">Usuários</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}