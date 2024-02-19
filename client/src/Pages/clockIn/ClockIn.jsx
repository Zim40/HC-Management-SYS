// import { useEffect } from 'react';
import Auth from "../../utils/auth";
import "./style.css";

export default function ClockIn() {
  if(!Auth.loggedIn()) {
    window.location.replace('/Login');
}

// Function to access currently logged in users ID
  const getUserId = async () => {
    const token = Auth.getProfile();
    if (!token) {
      console.log("No Token");
    } else {
      return token.data._id;
    }
  };
//   Handle Clock Out functionality
  const handleClockOut = async (e) => {
    e.preventDefault();

    try {
      const userId = await getUserId();
      const response = await fetch(`http://localhost:5000/api/clockOut`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: userId }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData.message);
        console.log("Error with response");
      } else {
        console.log(responseData.message);
        console.log("User clockedOut");
      }
    } catch (error) {
      console.log(error);
      console.error("Error:", error);
    }
  };

// Handle Clock In functionality
  const handleClockIn = async (e) => {
    e.preventDefault();

    try {
      const userId = await getUserId();
      const response = await fetch(`http://localhost:5000/api/clockIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: userId }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        console.log(responseData.message);
        console.log("Error with response");
      } else {
        console.log(responseData.message);
        console.log("User clockedIn");
      }
    } catch (error) {
      console.log(error);
      console.error("Error:", error);
    }
  };

  return (
    <>
    <p className="clockIn--text">Select In/Out to record attendance</p>
      <div className="clockInOut--container">
        <button id="clockInBtn" className="clockBtn" onClick={handleClockIn} type="button">
         In ⌚
        </button>
        <button id="clockOutBtn" className="clockBtn" onClick={handleClockOut} type="button">
        Out ⏳
        </button>
      </div>
    </>
  );
}
