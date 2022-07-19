import React, { useEffect, useState } from "react"
import { Link, Route, Router, useNavigate } from "react-router-dom"
  
export default function LogIn(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    return(
        <div className="logIn">
             <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
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

                <button className="loginButton">Login</button>
                <button className="loginButton googleLogIn" >Login with Google</button>
                <span>Don't have an account? <Link to={'/register'}>Register</Link> now.</span>
            </div>
        </div>
    )
}   