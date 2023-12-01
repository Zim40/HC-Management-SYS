import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Auth from '../../utils/auth';
import "./style.css";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // POST new user function.
        const response = await fetch('http://localhost:5000/api/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            console.log(`User with ${formData.role} created`, responseData);
            Auth.loggedIn(response.token)
        } else {
            console.error('Error creating user:', response.statusText );
        }

    } catch (err) {
        // Catch any server side errors.
        console.error('Error creating user:', err);
        
    }
    console.log("Form submited");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "left", fontSize: 24 }}>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Control
            type="username"
            placeholder="Enter First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Control
            type="username"
            placeholder="Enter Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{ textAlign: "left" }}
            type="checkbox"
            label="Check for admin"
            name="role"
            value="ADMIN"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
