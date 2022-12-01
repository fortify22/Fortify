import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './images/logo.png'
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Fortify
          </Navbar.Brand>

          <Nav className="justify-content-center ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/organization">Organizations</Nav.Link>
            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="SLNav">
            <Nav.Link href="#link">Login</Nav.Link>

            <Nav.Link className="NBtn" href="#link">
              Sign Up
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default NavBar
