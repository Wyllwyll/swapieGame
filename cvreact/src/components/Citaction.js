import { condCita } from "./Conditionnel"


export function Citation() {

    if (condCita) {
        return (
            <div className="Citation" >
                <p>“Un code supprimé est un code débogué.” <br />Jeff Sickel</p>
            </div>
        )
    }
    else {
        return <div></div>
    }
}