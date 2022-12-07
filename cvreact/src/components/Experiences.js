import { condExp } from "./Conditionnel"



export function Experiences(props) {
    const expList = props.experiences.map((elm, i) => <li key={i} className="list-group-item">{elm}</li>)
    if (condExp){
    return (
        <div className="exp">
            <h3>Expérience Professionnel</h3>
            <ul>
                {expList}
            </ul>
        </div>
    )
    }
    else{
        return <div></div>
    }
}