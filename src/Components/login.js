import React, { useEffect, useState } from "react"
import { questionsDatabase } from './Databases/questionsDatabase';
import Questions from './questionsPage';
import { validUsers } from "./Databases/validUsers";

   
export default function LogIn(){
    const [usrnm,setUsernm] = useState('')
    if(validUsers.includes(usrnm)){
        return(
            <Questions Data = {questionsDatabase} UserName ={usrnm}/>
        )
    }
    return(
        <div>
            <h3>INNLOGGING</h3>
            <input type={'text'} placeholder={'Brukernavn'} onChange={(e)=>setUsernm(e.target.value)} />
        </div>
    )
}   
