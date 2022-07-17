import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { Link, Route, BrowserRouter as Router, useNavigate } from "react-router-dom"
import auth from "./firebase.js"
  
export default function AdminPage(){

    return(
        <div className="logIn">
            <h1>Dare Night</h1>
            <div className="loginBox">
                <Link to={'/questionsPage'}>
                <button className="loginButton googleLogIn" >See questions</button>
                </Link>
                <Link to={'/insertquestion'}>
                    <button className="loginButton">Insert question</button>
                </Link>
            </div>
        </div>
    )
}   