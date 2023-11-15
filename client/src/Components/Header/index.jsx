import "./style.css";
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
        <NavBar 
          currentPage={currentPage} 
          handlePageChange={handlePageChange} />
      </div>
    </>
  );
}
