import { Link } from "react-router-dom";

export default function HomeScreen(){
    return(
        <div className="DareNight">
        <h1>DARE NIGHT</h1>
        <Link to={'/questionsPage'}>
            <button className="underheader">questions</button>
        </Link>
        <br/>
        <Link to={'AdminPage'}>
            <button className="underheader">adminpage</button>
        </Link>
        <br/>
        <Link to={'login'}>
            <button className="underheader">log in</button>
        </Link>
        <br/>
        <Link to={'register'}>
            <button className="underheader">create new user</button>
        </Link>
        </div>
    )
}