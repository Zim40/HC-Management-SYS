import Auth from '../../utils/auth';



export default function Home () {
    if(!Auth.loggedIn()) {
        window.location.replace('/Login');
    }
    return (
        <div>Welcome to the landing page (Home)</div>
    )
}