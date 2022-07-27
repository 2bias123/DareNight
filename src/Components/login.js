import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, Navigate, Route, Router, useNavigate } from "react-router-dom"
import { db } from "./firebase"
import Header from "./Header.js"
  
export default function LogIn(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [errorMessages, setErrorMessages] = useState({});

    const navigate = useNavigate()

    const auth = getAuth()

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const login = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user
            console.log("succsessfully logged in as",user.email)
            navigate('/questionsPage')
        }).catch((error) => {
            setErrorMessages({name:"login", message: "Invalid username or password"})
          });
          setEmail("")
          setPassword("")
    }

    return(
        <div className="logIn">
            <Header/>
                <form onSubmit={login}>
                    <div className="loginBox">
                    <input 
                    type={'text'} 
                    className='loginTextBox' 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder='Email Address'
                    required
                    />

                    <input 
                    type={'password'} 
                    className='loginTextBox' 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    placeholder='Password'
                    required
                    />

                    {renderErrorMessage("login")}

                    <input type={"submit"} value={"Log in"}></input>
                    <span className="funtext">Don't have an account? <Link to={'/register'}>Register</Link> now.</span>
                    </div>
                </form>
            </div>
    )
}  
