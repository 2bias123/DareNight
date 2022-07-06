import db from "./firebase"
import React, { useState, useEffect} from "react"
import { questionsDatabase } from "./Databases/questionsDatabase"
import { doc, setDoc } from "firebase/firestore"; 
import Questions from "./questionsPage";


export default function InsertQuestion(){
    const [QstId,setId] = useState('')
    const [Difficulty,setDifficulty] = useState('')
    const [QstTxt,setTxt] = useState('')
    const [QstPoints,setPoints] = useState(0)

    /**
     * Takes the values inserted by the user and inserts into the firestore database, 
     * and then resets the values
     */
    const handleSubmit = () => {
        setDoc(doc(db,"Questions",QstId),{
            id : QstId,
            difficulty : Difficulty,
            question_text : QstTxt,
            points : QstPoints,
            completed : true
        })
        document.getElementById('id').value = ''
        document.getElementById('dificulty').value = ''
        document.getElementById('question_text').value = ''
        document.getElementById('points').value = null

    }

    return(
        <div>
            <input type={'text'} id={'id'} placeholder={'Question id'} onChange={(e)=>setId(e.target.value)}/>
            <input type={'text'} id={'dificulty'} placeholder={'Difficulty'} onChange={(e)=>setDifficulty(e.target.value)}/>
            <input type={'text'} id={'question_text'} placeholder={'Discription'} onChange={(e)=>setTxt(e.target.value)}/>
            <input type={'number'} id={'points'} placeholder={'points'} onChange={(e)=>{setPoints(Number(e.target.value))}}/>
            <input type={'button'} onClick={()=>handleSubmit()}/>
        </div>
    )
}