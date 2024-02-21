import { useState, useEffect } from "react";
import "./style.css";

export default function Time() {
  const [formattedTime, setFormattedTime] = useState("");

  // Use Effect sets and clears interval every second
  useEffect(() => {
    const interval = setInterval(clock, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function clock() {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const options = {
      // year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    };

    const formattedDateTime = Intl.DateTimeFormat("en-US", options).format(
      date
    );
    setFormattedTime(formattedDateTime);
  }
  return (
    <>
      {formattedTime ? (
        <div className="timeNow--container">
          <p className="timeNow">{formattedTime}</p>
        </div>
      ) : (
        <div className="timeNow--container">
          <p className="loading"></p>
        </div>
      )}
    </>
  );
}
