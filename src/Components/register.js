import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { setDoc, doc, getDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { Link, Route, BrowserRouter as Router, useNavigate } from "react-router-dom"
import Header from "./Header.js"
import { db } from "./firebase.js"
  
export default function Register(){

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmPassword,setConfirmedPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    //This method checks if the two password is not empty and that they match
    async function credentialsValidate(){
        const userInfo = doc(db,"Users",email)
        const userSnap = await getDoc(userInfo)
        
        if(userSnap.exists()){
            setError("This email address is alredy in use")
            return false
        }else return true
    
    
    }

    const ValidateEmail=(mail) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
        setError("You have entered an invalid email address!")
        return (false)
    }


    const auth = getAuth()
    async function registerUsr(){
        if(credentialsValidate()){
            createUserWithEmailAndPassword(auth,email,confirmPassword)
            .then((userCredential)=>{
                
                const user = userCredential.user

                setDoc(doc(db,"Users",user.email),{
                    Score : 0,
                    uid : user.uid,
                    team : null,
                    mail : user.email
                })

                navigate('/ChoseTeam')
            })
            // .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmedPassword('')
    }

    return(
        <div className="logIn"> 
        <Header/>
            {/* <form onSubmit={()=>registerUsr()}> */}
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
                onChange={(e)=>{setConfirmedPassword(e.target.value)}}
                placeholder='Confirm Password'/>
                
                <button className="loginButton" onClick={registerUsr}>Register</button>
                <span className="funtext">Already have an account? <Link to="/login">Sign in</Link></span>
            </div>
            {/* </form> */}
        </div>
    )
}   