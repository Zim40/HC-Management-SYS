 import Auth from '../../utils/auth';
 
 export default function Attendance () {
    if(!Auth.loggedIn()) {
        window.location.replace('/Login');
    }
    return (
        <>
         <p>Attendance page</p>
        </>
    )

 }