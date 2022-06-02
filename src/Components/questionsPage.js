import { useState } from "react"
import { questionsDatabase } from "./questionsDatabase"

export default function Questions({Data}){
    // array that keeps track of checkbox state 
    const [checked, setChecked] = useState(
        new Array(questionsDatabase.length).fill(false)
        )
    
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
                    return sum + questionsDatabase[index].points
                }
                return sum
            },
            0
        )
        setCount(totalPoints)
    }

    return(        
        <div className='DareNight'>
            <h1 className='DareNightHeader'>Dare Night</h1>
            <h2 className='scoreCounter'>{count}</h2>
            <br></br>
            <br></br>
            <div id='questionList'>
            {
            Data.map(( value, index ) => (         
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
