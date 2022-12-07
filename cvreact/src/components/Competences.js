import { condComp } from "./Conditionnel"

export function Competences(props) {
    console.log(props);
    const compList = props.competences.map((elm, i) => <li key={i} className="list-group-item">{elm}</li>)
    if (condComp) {
        return (
            <div className="Competences">
                <h3>Compétences</h3>
                <ul>
                    {compList}
                </ul>
            </div>
        )
    }

    else {
        return <div></div>
    }
}