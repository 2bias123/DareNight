import { Link } from "react-router-dom";
import DropDownMenu from "./dropdownmenu";

export default function HomeScreen(){
    return(
        <div className="DareNight">
        <h1>DARE NIGHT</h1>
        <DropDownMenu/>

        <Link to={'/questionsPage'}>
            <button className="underheader">questions</button>
        </Link>
        {/* <br/>
        <Link to={'AdminPage'}>
            <button className="underheader">adminpage</button>
        </Link> */}
        <br/>
        <Link to={'login'}>
            <button className="underheader">log in</button>
        </Link>
        <br/>
        <Link to={'register'}>
            <button className="underheader">create new user</button>
        </Link>
        <br/>
        <Link to={'ChoseTeam'}>
            <button className="underheader">Chose team</button>
        </Link>
        </div>
    )
}