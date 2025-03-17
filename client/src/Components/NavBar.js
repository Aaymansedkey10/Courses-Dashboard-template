import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function NavBar() {
    return(
        <>
            <nav className="navbar-container">
                <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                    <Container fluid>
                        <Link className="navbar-brand" to="/">Dashboard</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link"  to="/courses/add">Add course</Link>
                            <Link className="nav-link"  to="/instructors">Instructors</Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </>
    )
}