import { condAnec } from "./Conditionnel"


export function Anecdote() {

    if (condAnec) {
        return (
            <div className="insolite">
                <p>Je rêve de pouvoir enfin apprendre à coder pour réaliser tout ce qui peu me passer par la tête!</p>
            </div>
        )
    }
    else {
        return <div></div>
    }
}