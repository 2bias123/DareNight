import react,{useState} from 'react'
import { questionsDatabase } from './questionsDatabase'
import './questionsList'
import QuestionsList from './questionsList'

export default function Questions(){
    return(
        <div className='DareNight'>
            <h1 className='DareNightHeader'>Dare Night</h1>
            <QuestionsList QuestionDatabase={questionsDatabase}></QuestionsList>
        </div>
    )
}

function sortDificulty(){
    return(
        <div></div>
    )
}