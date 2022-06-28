import React from "react";

export default function Buttons({setQuestions,diff,filterQuestions,Data}){
    return(
        <div>
            {/* maps over diff set and displays a button for each value in set */}
            {diff.map((value,index)=>{
                return(
                    <button key={index}
                    //When clicked the button filters the list based on the buttons value
                    onClick={()=>filterQuestions(value)}
                    >
                        {value}
                    </button>
                )
            })}
            {/* When this button is clicked it resets the filter */}
            <button onClick={()=>setQuestions(Data)}>All</button>
        </div>
    )
}