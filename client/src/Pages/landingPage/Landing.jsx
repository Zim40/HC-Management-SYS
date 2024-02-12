import "./style.css";
// import Auth from "../../utils/auth";

export default function Landing() {
  // if (Auth.loggedIn()) {
  //   window.location.replace("/home");
  // }
  return (
    <div className="landing--container">
      <h1 className="landing--title">WELCOME.</h1>
      <p className="landing--description">
        Our MERN Stack Employee Time Tracking System is a comprehensive web
        application designed to streamline employee management and time tracking
        processes for businesses. With its intuitive interface and robust
        features, this application serves both administrators and employees,
        providing them with the tools they need to efficiently manage their time
        and tasks.
      </p>
    </div>
  );
}
