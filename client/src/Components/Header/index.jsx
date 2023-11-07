import "./style.css";


// Initial Header Tester Component
// eslint-disable-next-line react/prop-types
export default function Header({ title }) {
  
  return (
    <>
   
    <div className="header--container">
      
      <h1>{title}</h1>
      
    </div>
    </>
  );
}
