import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { Navbar, Nav } from 'react-bootstrap';
export default function NavBar() {
  return (
   <>
   <div>
   <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </>
  )
}
