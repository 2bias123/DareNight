import { Link } from "react-router-dom";
import DropDownMenu from "./dropdownmenu";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from "react";


export default function Header(){

    const auth = getAuth()

    const[loggedUser,setLoggedUser] = useState("You are not logged in")


    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedUser(user.email)
        console.log(user.email,"is logged in")
        } else {console.log("there is not anyone signed in right now")}
    })

      
    return(
        <div className="siteheader">
            <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
            <DropDownMenu/>
            <h3>{loggedUser}</h3>
        </div>
    )
}