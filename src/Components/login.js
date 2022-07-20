import { doc, getDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, Navigate, Route, Router, useNavigate } from "react-router-dom"
import { db } from "./firebase"
import Header from "./Header.js"
  
export default function LogIn(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')


    const navigate = useNavigate()

    
    async function login() {
        // const userInfo = doc(db,"Users",email)
        // const docSnap = await getDoc(userInfo)
        // if(docSnap.exists()){
        //     console.log(docSnap.data())
        //     navigate("/questionspage")
        // }else{
        //     console.log("denne finnes ikke")
        // }
    }

    return(
        <div className="logIn">
            <Header/>
                <form onSubmit={()=>login()}>
                <div className="loginBox">

                <input 
                type={'text'} 
                className='loginTextBox' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Username'/>

                <input 
                type={'password'} 
                className='loginTextBox' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder='Password'/>

                <button type="button" className="loginButton" onClick={()=>login()}>Login</button>
                <span>Don't have an account? <Link to={'/register'}>Register</Link> now.</span>
                {/* <button className="loginButton googleLogIn" >Login with Google</button> */}
                </div>
                </form>
            </div>
    )
}  
