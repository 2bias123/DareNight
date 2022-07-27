import React, { useState, useEffect} from "react"
import Buttons from "./Buttons";
import { questionsDatabase } from "./Databases/questionsDatabase"
import {db} from "./firebase";
import { doc, updateDoc, onSnapshot, getDoc, arrayUnion, arrayRemove} from "firebase/firestore"
import { Link } from "react-router-dom";
import Header from "./Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";

   
export default function Questions({Data,UserName}){
    //Hook that determines what is displayed
    const[questions,setQuestions] = useState(Data)
    
    const[score,setScore] = useState(0)

    const[currentTeam,setCurrentTeam] = useState("")

    const auth = getAuth()

    onAuthStateChanged(auth,(user)=>{
        if(user){
            onSnapshot(doc(db,"Users",user.email),(doc)=>{
                if(doc.data().team !== null){
                    setCurrentTeam(doc.data().team)
                }
            })
    }})

    //Makes a set with the diffrent difficulties
    const diff = [...new Set(Data.map((val)=>val.difficulty))]

    //Function that filters out questions based on difficulty
    const filterQuestions = (filterValue) => {
        const newQuestions = Data.filter((newVal) => {
            return newVal.dificulty === filterValue;
        });
        setQuestions(newQuestions);
    };

    //When a box is checked or unchecked it changes the status of the question in the databse aswell
    //It also updates the scorecounter
    const handleOnChange = (id,val,points) => {
        if(!val.includes(currentTeam)){
            updateDoc(doc(db,"Questions",id),{completedBy : arrayUnion(currentTeam)})
            updateDoc(doc(db,"Teams",currentTeam),{score : score+points})
        } else if(val.includes(currentTeam)){
            updateDoc(doc(db,"Questions",id),{completedBy : arrayRemove(currentTeam)})
            updateDoc(doc(db,"Teams",currentTeam),{score : score-points})
        }
    }

    if(currentTeam !== ""){
    onSnapshot(doc(db,"Teams",currentTeam),(doc)=>{
        setScore(doc.data().score)
    })
}

    if(currentTeam !== ""){
    return(
        <div className='DareNight'>
            <Header/>
            <h2 className='scoreCounter'>{score}</h2>
            <br></br>
            <br></br>
            {/* <Buttons filterQuestions = {filterQuestions} diff={diff} setQuestions={setQuestions} Data={Data}></Buttons> */}
            <div id='questionList'>
            {
            Data.map(
                (value) => ( 
                <div className="flex">
                    <div className="questionInfo">
                        <h3 className="questionDificulty">{value.difficulty}</h3>
                        <h3 className="mainQuestion">{value.question_text}</h3>
                        <h3 className="points">{value.points}</h3>
                        <input 
                            checked={value.completedBy.includes(currentTeam)}
                            onChange={() => handleOnChange(value.id,value.completedBy,value.points)} 
                            className= "checkbox" type='checkbox'/>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )} else return(
        <div className='DareNight'>
            <h2>Du må være en del av et lag for å kunne se spørsmålene. Bli med i et lag <Link to={'/ChoseTeam'}>her</Link></h2>
        </div>
    )
}   
