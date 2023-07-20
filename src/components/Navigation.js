import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { FaDog } from "react-icons/fa";

const Navigation = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand ><h3><FaDog /></h3></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">โจทย์ข้อที่ 1</Nav.Link>
                        <Nav.Link href="/p2">โจทย์ข้อที่ 2</Nav.Link>
                        <Nav.Link href="/p3">โจทย์ข้อที่ 3</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;