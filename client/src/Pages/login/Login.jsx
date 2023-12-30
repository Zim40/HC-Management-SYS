import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Auth from '../../utils/auth';
import { useState } from "react";
import "./style.css";

export default function Login() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }; 
  

  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      // Login logic
      const response = await fetch('http://localhost:5000/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if(!response.ok) {
        console.log("Error logging in", responseData.message);
      }
      console.log(responseData.role);
      const { token } = responseData

      Auth.login(token);
    } catch (error) {
      return console.error('Error logging user in:', error);
    }
    console.log("Form submited")
  }
  // console.log(formData)

  return (
    <Form>
      <h1 style={{ textAlign: "left", fontSize: 24 }}>Login</h1>
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
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSumbit}>
        Submit
      </Button>
    </Form>
  );
}
