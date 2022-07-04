import React, { useState, useEffect} from "react"
import Buttons from "./Buttons";
import { questionsDatabase } from "./Databases/questionsDatabase"
import db from "./firebase";
   
export default function Questions({Data,UserName}){
    //Hook that determines what is displayed
    const[questions,setQuestions] = useState(Data)
    
    // array that keeps track of checkbox state 
    const [checked, setChecked] = useState(
        new Array(Data.length).fill(false)
        )
    
    //Makes a set with the diffrent difficulties
    const diff = [...new Set(Data.map((val)=>val.dificulty))]

    //Function that filters out questions based on difficulty
    const filterQuestions = (filterValue) => {
        const newQuestions = Data.filter((newVal) => {
          return newVal.dificulty === filterValue;
        });
        setQuestions(newQuestions);
      };

    // points count
    const [count, setCount] = useState(0)

    // function called when the state of the check boxes changes
    const handleOnChange = (position) => {
        //loop over the array with boolean values and reverse the value corresponding to the given index
        const updatedChecked = checked.map((item, index) =>
        index === position ? !item : item
        )

        setChecked(updatedChecked)

        const totalPoints = updatedChecked.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + Data[index].points
                }
                return sum
            },
            0
        )
        setCount(totalPoints)
    }
    /**
     * When the score count is changed it updates the score in the database for the user that is logged in
     */
    // useEffect(()=>{db.collection('Users').doc(UserName).set({score:count})},[count])
    return(        
        <div className='DareNight'>
            <h1 className='DareNightHeader'>Dare Night</h1>
            <h2 className='scoreCounter'>{count}</h2>
            <br></br>
            <br></br>
            <Buttons filterQuestions = {filterQuestions} diff={diff} setQuestions={setQuestions} Data={Data}></Buttons>
            <div id='questionList'>
            {
            questions.map(( value, index ) => (         
                <div className="flex">
                    <div className="questionInfo">
                        <h3 className="questionDificulty">{value.dificulty}</h3>
                        <h3 className="mainQuestion">{value.question_text}</h3>
                        <h3 className="points">{value.points}</h3>
                        <input 
                            checked={checked[index]}
                            onChange={() => handleOnChange(index)} 
                            className= "checkbox" type='checkbox'/>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}   
