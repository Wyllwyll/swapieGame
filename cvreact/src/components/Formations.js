import { condFor } from "./Conditionnel"



export function Formations(props) {
    const formList = props.formations.map((elm, i) => <li key={i} className="list-group-item">{elm}</li>)

    if (condFor) {
        return (
            <div className="formation">
                <h3>Formations</h3>
                <ul>
                    {formList}
                </ul>
            </div>
        )
    }
    else {
        return <div></div>
    }
}