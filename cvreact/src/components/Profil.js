import { condProf } from "./Conditionnel"


export function Profil(props) {
    const { firstname, lastname, picture } = props
    if (condProf) {
        return (
            < div className="Profil container" >
                <div className="row justify-content-between">
                    <h1 className="col-4 offset-4">CV {firstname} {lastname}</h1>
                    <div className="col-4 w-25">
                        <img src={picture} className="img-thumbnail" alt="profil" width="150px" />
                    </div>
                </div>
            </div >
        )
    }
        else {
            return <div></div>
        }
    }
