import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
  
export default function Register(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    return(
        <div className="logIn">
            <div className="loginBox">
                <input type={'text'} className='loginTextBox' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address'/>
                <input type={'password'} className='loginTextBox' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
                <button className="loginButton">Login</button>
                <button className="loginButton googleLogIn" >Login with Google</button>
                <div>
                    {/* <Link to="/reset">Forgot Password</Link> */}
                </div>
                {/* <div>Don't have an account? <Link to="/register">Register</Link> now.</div> */}
            </div>
        </div>
    )
}   