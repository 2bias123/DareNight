import react,{useEffect,useState,setState} from 'react'
import { questionsDatabase } from './questionsDatabase'


export default function Questions({Data}){
    const [count, setCount] = useState(0);
    return(
        <div className='DareNight'>
            <h1 className='DareNightHeader'>Dare Night</h1>
            <h2 className='scoreCounter'>{count}</h2>
            <div id='questionList'>
            {
            Data.map((value,index)=>(         
                <div className="flex" key = {index}>
                    <div className="questionInfo">
                        <h3 className="questionDificulty">{value.dificulty}</h3>
                        <h3 className="mainQuestion">{value.question_text}</h3>
                        <h3 className="points">{value.points}</h3>
                        <input onChange={()=>setCount(count +1)} className= "checkbox" type='checkbox' ></input>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}
