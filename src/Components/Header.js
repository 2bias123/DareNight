import { Link } from "react-router-dom";
import DropDownMenu from "./dropdownmenu";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from "react";
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";


export default function Header(){

    const auth = getAuth()

    const[loggedUser,setLoggedUser] = useState("You are not logged in")
    const[team,setTeam] = useState("You have not joined a team yet")

    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedUser(user.email)
        onSnapshot(doc(db,"Users",user.email),(doc)=>{
            if(doc.data().team !== null){
                setTeam(doc.data().team)
            }
        })
    }
    })
      
    return(
        <div className="siteheader">
            <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
            <DropDownMenu/>
            <h3>{loggedUser}</h3>
            <h3>{team}</h3>
        </div>
    )
}