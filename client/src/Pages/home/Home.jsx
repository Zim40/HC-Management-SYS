import Auth from "../../utils/auth";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";

export default function Home() {
  if (!Auth.loggedIn()) {
    window.location.replace("/Login");
  }
//   const [errorText, setErrorText] = useState("");

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
    <Row xs={1} md={4} className="g-4">
        
      {employeeData.map((employee, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src="holder.js/100px160"
              alt="Employee Image"
            />
            <Card.Body>
              <Card.Title>
                {employee.firstName} {employee.lastName}
              </Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Position: {employee.role}</ListGroup.Item>
                <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
