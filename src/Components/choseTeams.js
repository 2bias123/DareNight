import Header from "./Header";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { arrayUnion, doc, getDoc, updateDoc, setDoc, arrayRemove } from "firebase/firestore"
import { db } from "./firebase"
import { useState } from "react";
import Popup from 'reactjs-popup';

export default function CHoseTeam({Data}){

    const auth = getAuth()

    const [user,setUser] = useState("")

    //Sets the user hook to the currently logged in user
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user.email)
        }
    })

    
    //Gets the teams doc and adds the if there is space
    async function canJoin(numberOfMemebers,teamName) {

        if(user === ""){
            console.log("Du må være logget inn for å kunne bli med i et lag")
        }else{
        const teamInfo = doc(db,"Teams",teamName)
        const userInfo = doc(db,"Users",user)

        const teamSnap = await getDoc(teamInfo)
        const userSnap = await getDoc(userInfo)

        if(teamSnap.exists() && userSnap.data().team === null){
            if(teamSnap.data().Members.length <= numberOfMemebers){
                updateDoc(teamInfo,{Members : arrayUnion(user)})
                updateDoc(userInfo,{team : teamName})
            }
        }else if(userSnap.data().team === teamName){
            console.log("Du er allerede med i dette laget")
        }
        else if(userSnap.data().team !== null){
            console.log("Du er allerede med i et annet lag")
        }
        }
    }

    async function leaveTeam(teamName){

        if(user === ""){
            console.log("Du må være logget inn for å kunne forlate et lag")
        }else{
        const teamInfo = doc(db,"Teams",teamName)
        const userInfo = doc(db,"Users",user)

        const teamSnap = await getDoc(teamInfo)
        const userSnap = await getDoc(userInfo)

        if(userSnap.data().team === teamName){
            updateDoc(teamInfo,{Members : arrayRemove(user)})
            updateDoc(userInfo,{team : null})
            console.log("du har nå fortlattt laget")
        } else if(userSnap.data().team !== teamName){
            console.log("Du kan ikke forlate et lag du ikke er en del av")
        }
    }
    }

    return(
        <div id='questionList'>
            <Header/>
        {
            Data.map(
                (value)=>(
                    <div className="flex">
                        <div className="questionInfo">
                            <h3 className="mainQuestion">{value.TeamId}</h3>
                            <h3>{value.Members.length}/5</h3>
                            <button onClick={()=>{canJoin(5,value.TeamId)}}>Join team</button>
                            <button onClick={()=>{leaveTeam(value.TeamId)}}>Leave team</button>
                        </div>
                    </div>
                )
            )
        }
        </div>
    )
}