import Header from "./Components/Header/index";
import Home from "./Pages/home/Home";
import Login from './Pages/login/Login';
import Attendance from './Pages/attendance/Attendance';
import Register from './Pages/register/Register';
import Landing from './Pages/landingPage/Landing';
import Profile from './Pages/profile/Profile';
import ClockIn from './Pages/clockIn/ClockIn';
import Footer from './Components/Footer/index';
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
            path="/"
            element={<Landing />}
            />
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
              <Route
              path="/Clock"
              element={<ClockIn />}
              />
              <Route
              path="/profile/:userId"
              element={<Profile />}
              />
          </Routes>
          
        </Router>
        <Footer />
        
      
    </>
  );
}

export default App;
