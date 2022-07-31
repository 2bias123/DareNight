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
    const [errorMessages, setErrorMessages] = useState({});

    const navigate = useNavigate()

    const errors = {
        uname: "This email address is alredy in use",
        uname1: "This is not a valid emailaddress",
        password1: "The two passwords didnt match",
        password2: "The passwords needs to be at least 6 characters long"
      };

    // Creates the error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    //This method checks if the two password is not empty and that they match
    async function credentialsValidate(){
        const userInfo = doc(db,"Users",email)
        const userSnap = await getDoc(userInfo)
        
        if(ValidateEmail(email)){
            if(userSnap.exists()){
                setErrorMessages({name: "uname", message: errors.uname})
                return false
        }
        if(password !== confirmPassword){
            setErrorMessages({name: "confirmPassword", message: errors.password1})
            return false
        }
        if(confirmPassword.length<6){
            setErrorMessages({name: "confirmPassword", message: errors.password2})
            return false
        }
        else return true
    }
}

    const ValidateEmail=(mail) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
        setErrorMessages({ name: "uname", message: errors.uname1 });
        return (false)
    }


    const auth = getAuth()
    async function registerUsr(event){
        event.preventDefault()
        if(await credentialsValidate()){
            createUserWithEmailAndPassword()
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
            setEmail('')
            setPassword('')
            setConfirmedPassword('')
        }
    }

    return(
        <div className="logIn"> 
        <Header/>
            <form onSubmit={registerUsr}>
            <div className="loginBox">
                <input 
                type={'text'} 
                className='loginTextBox' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Email Address'
                name="uname"
                required
                />
                {renderErrorMessage("uname")}

                <input 
                type={'password'} 
                className='loginTextBox' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                placeholder='Password'
                name="password"
                required
                />

                <input 
                type={'password'} 
                className='loginTextBox' 
                value={confirmPassword} 
                onChange={(e)=>{setConfirmedPassword(e.target.value)}}
                placeholder='Confirm Password'
                name="confirmPassword"
                required
                />
                {renderErrorMessage("confirmPassword")}

                
                {/* <button className="loginButton" onClick={registerUsr}>Register</button> */}
                <input type={"submit"} value={"Register"}></input>
                <span className="funtext">Already have an account? <Link to="/login">Sign in</Link></span>
            </div>
            </form>
        </div>
    )
}   