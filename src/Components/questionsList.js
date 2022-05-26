import React from "react";
import './questionsDatabase'

export default function QuestionsList({QuestionDatabase}){
    return(
        <div id="questionsList">
            {item(QuestionDatabase)}
        </div>
    )
}

function item(data,preferedDificulty){
    if(data.dificulty == preferedDificulty){
    return(
        <>
        {
            data.map((value,index)=>(         
                <div className="flex" key = {index}>
                    <div className="questionInfo">
                        <h3 className="questionDificulty">{value.dificulty}</h3>
                        <h3 className="mainQuestion">{value.question_text}</h3>
                        <h3 className="points">{value.points}</h3>
                        <input className= "checkbox" type='checkbox'></input>
                    </div>
                </div>
            ))
        }
        </>
    )
}
}