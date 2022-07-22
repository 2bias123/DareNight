import Header from "./Header";

export default function CHoseTeam({Data}){
    

    return(
        <div id='questionList'>
            <Header/>
        {
            Data.map(
                (value)=>(
                    <div className="flex">
                        <div className="questionInfo">
                            <h3 className="mainQuestion">{value.TeamId}</h3>
                            <h3>{value.Members.length}/5</h3>
                        </div>
                    </div>
                )
            )
        }
        </div>
    )
}