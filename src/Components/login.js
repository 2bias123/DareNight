import React, { useEffect, useState } from "react"
import { questionsDatabase } from './Databases/questionsDatabase';
import Questions from './questionsPage';
import { validUsers } from "./Databases/validUsers";

   
export default function LogIn(){

    const [usrnm,setUsernm] = useState('')

    //Checks if iserted username is in a list of valid usernames if it is it returns the website
    if(validUsers.includes(usrnm)){
        return(
            <Questions Data = {questionsDatabase} UserName ={usrnm}/>
        )
    }
    return(
        <div>
            <br></br>
            <img src='\DareNightLogo.jpeg' alt=''/>
            <br></br>
            <h3>INNLOGGING</h3>
            <input type={'text'} placeholder={'Brukernavn'} onChange={(e)=>setUsernm(e.target.value)} />
        </div>
    )
}   
