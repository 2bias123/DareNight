import React, { useState, useEffect} from "react"
import { questionsDatabase } from "./Databases/questionsDatabase"
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { doc, updateDoc, onSnapshot} from "firebase/firestore"; 
import Qst from "./getFire";

   
export default function Score(){
    
    const[score,setScore] = useState(0)

    Qst('Users').map(
        (e)=> {if(e.userid === 'user1'){
            setScore(e.score)
        }}
    )
    return score
}   