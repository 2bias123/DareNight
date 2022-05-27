import React, {useState} from 'react';
import './questionsDatabase'
import { comtor } from './questionsPage';

export default function QuestionsList({QuestionDatabase}){
    return(
        <div id="questionsList">
            {item(QuestionDatabase)}
        </div>
    )
}

function item(data){
    return(
        <>
        {
            data.map((value,index)=>(         
                <div className="flex" key = {index}>
                    <div className="questionInfo">
                        <h3 className="questionDificulty">{value.dificulty}</h3>
                        <h3 className="mainQuestion">{value.question_text}</h3>
                        <h3 className="points">{value.points}</h3>
                        <input onChange={comtor} className= "checkbox" type='checkbox' ></input>
                    </div>
                </div>
            ))
        }
        </>
    )

}