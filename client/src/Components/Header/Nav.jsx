import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import Time from '../Time/index';
import "./style.css";
// import { Navbar, Nav } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
export default function NavBar({ currentPage, handlePageChange }) {
  return (
   <>
   <div>
   <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => handlePageChange("Home")} href="#home" >{<Time />}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <Nav className="tabs--container" >
              <Nav.Link 
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active custom-nav-link " : "nav-link custom-nav-link"
              }
              href="#home"
              id="tabs"
              >Home</Nav.Link>
              <Nav.Link 
              onClick={() => handlePageChange("LandingPage")}
              className={
                currentPage === "LandingPage" ? "nav-link active custom-nav-link " : "nav-link custom-nav-link"
              }
              href="#landingPage"
              id="tabs"
              >Attendance</Nav.Link>
          </Nav>
          <Navbar.Text className="nav--text" style={{color: "green"}}>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   </>
  )
}
