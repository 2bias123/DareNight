import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { Link, Route, BrowserRouter as Router, useNavigate } from "react-router-dom"
import auth from "./firebase.js"
  
export default function AdminPage(){

    return(
        <div className="DareNight">
            <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
            <br/>
                <Link to={'/questionsPage'}>
                <button className="underheader" >see questions</button>
                </Link>
                <br/>
                <Link to={'/insertquestion'}>
                    <button className="underheader">insert question</button>
                </Link>
        </div>
    )
}   