import Auth from "../../utils/auth";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import Profile from "../profile/Profile"
import imageSrc from "../../assets/pexels-johannes-plenio-1103970.jpg";
import "./style.css";

export default function Home() {
  if (!Auth.loggedIn()) {
    window.location.replace("/Login");
  }
  //   const [errorText, setErrorText] = useState("");
  const user = Auth.loggedIn() ? Auth.getProfile().data : null;

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/User", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.json();

        if (!response.ok) {
          //   setErrorText(responseData.message);

          setInterval(() => {
            // setErrorText("");
          }, 3000);
        } else {
          setEmployeeData(responseData.data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    
      {user.role === "ADMIN" ? (
        <Row xs={1} md={4} className="g-4">
      {employeeData.map((employee, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src={imageSrc}
              alt="Employee Image"
            />
            <Card.Body>
              <Card.Title className="card-title">
                {employee.firstName} {employee.lastName}
              </Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="list-group-item">
                  Position: {employee.role}
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  Email: {employee.email}
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  <a href={`/profile/${employee._id}`}>Link to profile</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      ) : (
       <Profile userId={user._id} /> 
      )}
      
    
      
    </>
  );
}
