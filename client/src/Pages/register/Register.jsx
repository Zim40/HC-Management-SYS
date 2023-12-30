import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Auth from '../../utils/auth';
import "./style.css";

export default function Register() {

  const [errorText, setErrorText] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "EMPLOYEE",
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
            body: JSON.stringify(formData),
            
        });
        
        const responseData = await response.json();

        if (!response.ok) {
          if(responseData.message === 'Admin Already Registered') {
            setErrorText("Admin Already Registered")
            setInterval(() => {
              setErrorText("")
            }, 3000)
            
          }

        } else {
          
          console.log(responseData.token);
          const {token} = responseData.data;
         
          console.log(`User with ${formData.role} created`, responseData);
        
         Auth.login(token);
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="username"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
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
          <div className="error--container">
            <p className="errorText">{errorText}</p>
          </div>
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
