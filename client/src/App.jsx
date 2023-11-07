import NavBar from './Components/Header/Nav';

import Header from './Components/Header/index'
import Time from './Components/Time/index';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <div>
      <NavBar />
        <Time />
        
          <Header title="Employee Attendance Tracker" />
            
      </div>
    </>
  )
}

export default App
