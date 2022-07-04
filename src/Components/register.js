import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { Link, Route, BrowserRouter as Router, useNavigate } from "react-router-dom"
import auth from "./firebase.js"
  
export default function Register(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmPassword,setConfirmedPassword] = useState('')
    const [error, setError] = useState('')


    //This method checks if the two password is not empty and that they match
    const passwordValidate = () =>{
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
            if(password !== confirmPassword){
                isValid = false
                setError('Passwords does not match')
            }
        }
        return isValid
    }

    const registerUsr = (e)=>{
        if(passwordValidate()){
            createUserWithEmailAndPassword(auth,email,password).then((res)=>{
                console.log(res.user)
            })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmedPassword('')
    }

    return(
        <div className="logIn">
            <form onSubmit={registerUsr}>
            <div className="loginBox">
                <input 
                type={'text'} 
                className='loginTextBox' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Email Address'/>

                <input 
                type={'password'} 
                className='loginTextBox' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder='Password'/>

                <input 
                type={'password'} 
                className='loginTextBox' 
                value={confirmPassword} 
                onChange={(e)=>setConfirmedPassword(e.target.value)} 
                placeholder='Confirm Password'/>
                
                <button className="loginButton">Register</button>

                <Link to={'/questionsPage'}>
                <button className="loginButton googleLogIn" >See questions</button>
                </Link>
                <span>Already have an account? <Link to="/login">Sign in</Link></span>
            </div>
            </form>
        </div>
    )
}   