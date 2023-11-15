import Header from "./Components/Header/index";
import Home from "./Pages/Home";
import LandingPage from './Pages/LandingPage';
import Attendance from './Pages/Attendance';
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
              element={<LandingPage />} />
            <Route 
              path="/Attendance" 
              element={<Attendance />} />
            <Route 
              path="/home" 
              element={<Home />} />
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
