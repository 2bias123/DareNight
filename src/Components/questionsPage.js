import React, { useState, useEffect} from "react"
import Buttons from "./Buttons";
import { questionsDatabase } from "./Databases/questionsDatabase"
import {db} from "./firebase";
import { doc, updateDoc, onSnapshot} from "firebase/firestore"
import { Link } from "react-router-dom";

   
export default function Questions({Data,UserName}){
    //Hook that determines what is displayed
    const[questions,setQuestions] = useState(Data)
    
    const[score,setScore] = useState(0)

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
        updateDoc(doc(db,"Questions",id),{completed : !val})
        if(!val){
          updateDoc(doc(db,"Users","user1"),{score : score+points})
        }
        if(val){
            updateDoc(doc(db,"Users","user1"),{score : score-points})
          }
    }

    onSnapshot(doc(db,"Users","user1"),(doc)=>{
        setScore(doc.data().score)
    })

    return(
        <div className='DareNight'>
            <Link to={"/"}>
                <button className="header">DARE NIGHT</button>
            </Link>
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
                            checked={value.completed}
                            onChange={() => handleOnChange(value.id,value.completed,value.points)} 
                            className= "checkbox" type='checkbox'/>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}   
