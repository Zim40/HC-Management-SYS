import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useState } from "react";

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
  

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log("Form submited")
  }
  // console.log(formData)

  return (
    <Form>
      <h1 style={{ textAlign: "left", fontSize: 24 }}>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control
          type="username"
          placeholder="Enter First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          autoComplete="username"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
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
