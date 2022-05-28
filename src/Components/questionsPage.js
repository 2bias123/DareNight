import react,{useEffect,useState,setState} from 'react'
import { questionsDatabase } from './questionsDatabase'

//Next step should be that the counter decrease each time you uncheck a checkbox and increase if it is checked again
//Then add the points of questions not just one point each time
export default function Questions({Data}){
    const [count, setCount] = useState(0)
    //All the checkboxes uses this state so that creates some bugs
    const [checked, setChecked] = useState(false)
    // const HandleCheck = ({Data}) =>{
    //     // const [checked, setChecked] = useState(false)
    //     if(!checked){
    //         setCount(count + Data)
    //         } else if(checked){
    //             setCount(count- Data)
    //         }   
    //         setChecked(!checked)
    //         console.log(checked)
    // }

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
                        <input onChange={()=>{
                            if(!checked){
                            setCount(count + value.points)
                            } else if(checked){
                                setCount(count-value.points)
                            }
                            setChecked(!checked)
                            console.log(checked)
                        }} className= "checkbox" type='checkbox'></input>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}   
