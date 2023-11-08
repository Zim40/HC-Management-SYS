import "./style.css";
import NavBar from './Nav';
import { useState } from 'react'
import Home from '../Pages/Home';
import LandingPage from '../Pages/LandingPage';


// Initial Header Tester Component
// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
  const [currentPage, setPage] = useState('Home');

  const renderPage = () => {
    if(currentPage === 'Home') {
      return <Home />
    }
    if(currentPage === 'LandingPage') {
      return <LandingPage />
    }
  }
  const handlePageChange = (page) => setPage(page)


  return (
    <>
   
    <div className="header--container">
    <NavBar title={title}
            currentPage={currentPage}
            handlePageChange={handlePageChange} 
    
    />
    {renderPage()}
      
      
    </div>
    </>
  );
}
