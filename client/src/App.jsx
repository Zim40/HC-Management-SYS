import Header from "./Components/Header/index";
import Home from "./Pages/Home";
import Login from './Pages/login/Login';
import Attendance from './Pages/Attendance';
import Register from './Pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      
        
        <Router>
       
        <Header />
          <Routes>
            <Route 
              path="/home"
              element={<Home />} />
            <Route 
              path="/Attendance" 
              element={<Attendance />} />
            <Route 
              path="/Login" 
              element={<Login />} />
              <Route 
              path="/Register"
              element={<Register />}
              />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
