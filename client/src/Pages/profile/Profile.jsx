import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile() {
  const [employeeData, setEmployeeData] = useState({});
  const { userId } = useParams();

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
          <h1>
            {employeeData.data.firstName} {employeeData.data.lastName}
          </h1>
          <ul style={{ listStyle: "none" }}>
            <li>{employeeData.data.role}</li>
            <li>{employeeData.data.email}</li>
          </ul>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
