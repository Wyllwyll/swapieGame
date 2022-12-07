import { condInt } from "./Conditionnel"


export function Interets(props) {
    const intList = props.interets.map((elm, i) => <li key={i} className="list-group-item">{elm}</li>)
    if (condInt) {
        return (
            <div className="interet">
                <h3>Centres d'intérêt</h3>
                <ul>
                    {intList}
                </ul>
            </div>
        )
    }
    else {
        return <div></div>
    }
}
