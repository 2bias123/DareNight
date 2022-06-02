import db from "./firebase"
import React, { useState, useEffect} from "react"


export default function InsertQuestion(){
    const [QstId,setId] = useState('')
    const [Difficulty,setDifficulty] = useState('')
    const [QstTxt,setTxt] = useState('')
    const [QstPoints,setPoints] = useState(0)

    const Qst = {
        Diff : Difficulty,
        Discription : QstTxt,
        Points : QstPoints
    }

    const handleSubmit = () => {
        db.collection('Questions').doc(QstId).set(Qst)
        document.getElementById('id').value = ''
        document.getElementById('Diff').value = ''
        document.getElementById('Desc').value = ''
        document.getElementById('Points').value = null

    }

    return(
        <div>
            <input type={'text'} id={'id'} placeholder={'Question id'} onChange={(e)=>setId(e.target.value)}/>
            <input type={'text'} id={'Diff'} placeholder={'Difficulty'} onChange={(e)=>setDifficulty(e.target.value)}/>
            <input type={'text'} id={'Desc'} placeholder={'Discription'} onChange={(e)=>setTxt(e.target.value)}/>
            <input type={'number'} id={'Points'} placeholder={'points'} onChange={(e)=>{setPoints(Number(e.target.value))}}/>
            <input type={'button'} onClick={()=>handleSubmit()}/>
        </div>
    )
}