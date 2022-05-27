import react,{useEffect,useState,setState} from 'react'
import { questionsDatabase } from './questionsDatabase'
import './questionsList'
import QuestionsList from './questionsList'

export default function Questions(){
    const [count, setCount] = useState(0);
    return(
        <div className='DareNight'>
            <h1 className='DareNightHeader'>Dare Night</h1>
            <h2 className='scoreCounter'>{count}</h2>
            <QuestionsList QuestionDatabase={questionsDatabase}></QuestionsList>
            <input onClick={()=>setCount(count +1)} type='button'/>
        </div>
    )
}

export function comtor() {
    // setCount(count + 1)
}