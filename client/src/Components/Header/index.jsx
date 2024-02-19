import "./style.css";
// import hero from "../../assets/pexels-johannes-plenio-1103970.jpg"
import NavBar from "./Nav";
import { useState } from "react";

// Initial Header Tester Component
// eslint-disable-next-line react/prop-types
export default function Header() {
  const [currentPage, setPage] = useState("Home");

  const handlePageChange = (page) => setPage(page);

  return (
    <>
      <div className="header--container">
        {/* <img className="hero--img" src={hero} alt="Hero"></img> */}
        <NavBar 
          currentPage={currentPage} 
          handlePageChange={handlePageChange} />
      </div>
    </>
  );
}
