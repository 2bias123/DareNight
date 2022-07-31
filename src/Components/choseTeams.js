import Header from "./Header";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { arrayUnion, doc, getDoc, updateDoc, setDoc, arrayRemove } from "firebase/firestore"
import { db } from "./firebase"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CHoseTeam({Data}){

    const auth = getAuth()

    const [user,setUser] = useState("")

    const navigate = useNavigate()

    //Sets the user hook to the currently logged in user
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user.email)
        }
    })

    //Gets the teams doc and adds the if there is space
    async function canJoin(numberOfMemebers,teamName) {

        if(user === ""){
            alert("You have to be logged in to join a team")
        }else{
        const teamInfo = doc(db,"Teams",teamName)
        const userInfo = doc(db,"Users",user)

        const teamSnap = await getDoc(teamInfo)
        const userSnap = await getDoc(userInfo)

        if(teamSnap.exists() && userSnap.data().team === null){
            if(teamSnap.data().Members.length <= numberOfMemebers){
                updateDoc(teamInfo,{Members : arrayUnion(user)})
                updateDoc(userInfo,{team : teamName})
                alert("Sucsessfully joined "+ teamName)
                navigate('/questionsPage')
            }
        }else if(userSnap.data().team === teamName){
            console.log("You're already a part of this team")
        }
        else if(userSnap.data().team !== null){
            alert("You're already a part of another team")
        }
        }
    }

    async function leaveTeam(teamName){

        if(user === ""){
            alert("You have to be logged in to leave a team")
        }else{
        const teamInfo = doc(db,"Teams",teamName)
        const userInfo = doc(db,"Users",user)

        const teamSnap = await getDoc(teamInfo)
        const userSnap = await getDoc(userInfo)

        if(userSnap.data().team === teamName){
            updateDoc(teamInfo,{Members : arrayRemove(user)})
            updateDoc(userInfo,{team : null})
            alert("You have now left the team")
        } else if(userSnap.data().team !== teamName){
            alert("You can not leave a team youare not a part of")
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