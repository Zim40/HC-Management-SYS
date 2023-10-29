import "./style.css";

// Initial Header Tester Component
// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
  
  return (
    <div className="header--container">
      <h1>{title}</h1>

      <p style={{ fontWeight: 600, fontSize: 20 }}>Please Confirm Attendance</p>
      <div className="btnContainer">
        <button className="btnIn" type="button">In</button>
        <button className="btnOut" type="button">Out</button>
      </div>
    </div>
  );
}
