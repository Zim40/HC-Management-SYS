
// import { useEffect } from 'react';
import Auth from '../../utils/auth';

export default function ClockIn () {
   

    
    const getUserId = async () => {
        const token = Auth.getProfile();
        if(!token) {
         console.log("No Token");
        } else {
         return token.data._id;
        }
    }
      

        
        
   

    const handleClockIn =  async (e) => {
        e.preventDefault();
        
            try {
                const userId = await getUserId()
                const response = await fetch(`http://localhost:5000/api/clockIn`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({_id: userId})
                });
                const responseData = await response.json();

                if(!response.ok) {
                    console.log(responseData.message);
                    console.log("Error with response")
                } else {
                    console.log(responseData.message);
                    console.log("User clockedIn")
                }
            } catch (error) {
                console.log(error);
                console.error("Error:", error);
            }
        
    }

    return (
      <>
        <div>
          <button onClick={handleClockIn} type="button">
            Clock In
        </button>
          <button type="button">Clock Out</button>
        </div>
      </>
    );
}