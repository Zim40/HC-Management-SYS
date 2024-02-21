import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"

// eslint-disable-next-line react/prop-types
export default function Profile({ userId: propsUserId }) {
  const [employeeData, setEmployeeData] = useState({});
  const { userId: paramsUserId } = useParams();
  const userId = propsUserId || paramsUserId

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/User/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          console.log("Failed to fetch data.");
        } else {
          setEmployeeData(responseData);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, [userId]);
 

  return (
    <>
      {employeeData && employeeData.data ? (
        <>
         <div className="profile--container">
          <h1 className="profile--name">
            {employeeData.data.firstName} {employeeData.data.lastName}
          </h1>
          <div className="profile-info">
            <p className="profile--role">
              <strong>Role:</strong> {employeeData.data.role}
            </p>
            <p className="profile--email">
              <strong>Email:</strong> {employeeData.data.email}
            </p>
          </div>

          {employeeData.data.clockInOut &&
          employeeData.data.clockInOut.length > 0 ? (
            <>
              <h2>Clock-In Times:</h2>
              <div className="profile-time-container">
              <ul>
                {employeeData.data.formattedClockInOut.map((clockIn, index) => (
                  <li key={index}>
                    {clockIn.timestamp} - {clockIn.type}
                  </li>
                ))}
              </ul>
              </div>
            </>
          ) : (
            <div>No clock-in times available</div>
          )}
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
