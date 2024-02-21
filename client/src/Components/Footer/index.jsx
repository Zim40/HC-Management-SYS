import "./style.css";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <>
      <Container>
        <div className="footer">
          <span className="footerText--1"><strong>HC-Management System</strong></span>
          <span className="footerText--2"><strong>Made with &#10084;</strong></span>
        </div>
      </Container>
    </>
  );
}
