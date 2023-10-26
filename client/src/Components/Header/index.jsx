import { useState, useEffect } from "react";

// Initial Header Tester Component
export default function Header() {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    function clock() {
      const timestamp = Date.now();
      const date = new Date(timestamp);
      const options = {
        // year:'numeric',
        // month: 'long',
        // day: 'numeric',
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      const formattedDateTime = Intl.DateTimeFormat("en-US", options).format(
        date
      );
      setFormattedTime(formattedDateTime);
    }
    clock();
    setInterval(clock, 1000);
  }, []);

  return (
    <div>
      <h1> Employee Attendance Manager </h1>

      <p style={{fontWeight: 600, fontSize: 30 }}>{formattedTime}</p>
        <p style={{ fontWeight: 600, fontSize: 20 }}>
            Please Confirm Attendance{" "}
        </p>
      <div className="btnContainer">
        <button type="button">
           In
            </button>
                <button type="button">
                    Out
                    </button>
      </div>
    </div>
  );
}
