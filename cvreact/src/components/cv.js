import { Anecdote } from './Anecdote';
import { Citation } from './Citaction';
import { Competences } from './Competences';
import { Experiences } from './Experiences';
import { Formations } from './Formations';
import { Interets } from './Interet';
import { Profil } from './Profil';
import data from "../dataSheet/data.json";

export function Cv() {
    const profListe = data.Profil;

    return (
        <>
            <div className="text-center">
                <Profil firstname={profListe.firstname} lastname={profListe.lastname} picture={profListe.picture}></Profil>
                <div className="border border-primary rounded-pill">
                    <Citation></Citation>
                </div>
            </div>

            <div className="row">
                <div className="col"><Formations formations={data.formations}></Formations></div>
                <div className="col"><Experiences experiences={data.experiences}></Experiences></div>
            </div>

            <div className="row">
                <div className="col"><Competences competences={data.competences}></Competences></div>
                <div className="col"><Interets interets={data.interets}></Interets></div>
            </div>

            <div className="text-center mt-md-4 border border-primary rounded-pill">
                <Anecdote></Anecdote>
            </div>
        </>
    )
}