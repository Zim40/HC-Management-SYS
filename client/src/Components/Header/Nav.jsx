import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Time from "../Time/index";
import "./style.css";
import Auth from "../../utils/auth";
// import { Navbar, Nav } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
export default function NavBar({ currentPage, handlePageChange }) {
  const user = Auth.loggedIn() ? Auth.getProfile().data : null;

  // const user = Auth.loggedIn() ? Auth.getProfile().data : null;
  // console.log(user);

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>{<Time />}</Navbar.Brand>
          {Auth.loggedIn() ? (
            <>
              <Container>
                <Navbar.Toggle className="toggle--menuBtn"> Menu</Navbar.Toggle>

                <Navbar.Collapse className="justify-content-end">
                  <Nav className="tabs--container">
                    <Link
                      to="/home"
                      onClick={() => handlePageChange()}
                      className={
                        currentPage === "Home"
                          ? "nav-link active custom-nav-link "
                          : "nav-link custom-nav-link"
                      }
                      // href="#home"
                      id="tabs"
                    >
                      Profile
                    </Link>
                    {user.role === "ADMIN" ? null : (
                      //   <Link
                      //     to="/Attendance"
                      //     onClick={() => handlePageChange()}
                      //     className={
                      //       currentPage === "Attendance"
                      //         ? "nav-link active custom-nav-link "
                      //         : "nav-link custom-nav-link"
                      //     }
                      //     // href="#landingPage"
                      //     id="tabs"
                      //   >
                      //     Attendance
                      //   </Link>
                      // ) : (
                      <>
                        <Link
                          to="/Clock"
                          onClick={() => handlePageChange()}
                          className={
                            currentPage === "ClockIn"
                              ? "nav-link active custom-nav-link "
                              : "nav-link custom-nav-link"
                          }
                          // href="#landingPage"
                          id="tabs"
                        >
                          ClockIn
                        </Link>

                        <Link
                          to="/"
                          onClick={() => handlePageChange()}
                          className={
                            currentPage === "landingPage"
                              ? "nav-link active custom-nav-link "
                              : "nav-link custom-nav-link"
                          }
                          // href="#landingPage"
                          id="tabs"
                        >
                          Home
                        </Link>
                      </>
                    )}
                  </Nav>
                  <Navbar.Text className="nav--text" style={{ color: "green" }}>
                    Signed in as:{" "}
                    <a
                      style={{ color: "white" }}
                      href="#login"
                    >{`${user.firstName} ${user.lastName}`}</a>
                  </Navbar.Text>
                  <button type="button" className="logoutBtn" onClick={logout}>
                    Logout
                  </button>
                </Navbar.Collapse>
              </Container>
            </>
          ) : (
            <div className="logBtn--container">
              <Link to="/login" aria-label="Login">
                <button className="logBtn" type="button">
                  Login
                </button>
              </Link>
              <Link to="/register" aria-label="Register">
                <button className="logBtn" type="button">
                  Register
                </button>
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
}
