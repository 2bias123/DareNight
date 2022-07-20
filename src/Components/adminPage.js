import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { Link, Route, BrowserRouter as Router, useNavigate } from "react-router-dom"
import auth from "./firebase.js"
import Header from "./Header.js"
  
export default function AdminPage(){

    return(
        <div className="DareNight">
            <Header/>
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