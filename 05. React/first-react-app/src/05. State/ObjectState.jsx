import { useState } from "react";

export default function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})
    
    function increaseP1Score () {
        const newScores = {...scores, p1Score: scores.p1Score +1};
        setScores(newScores)
    }
    function increaseP2Score () {
        const newScores = {...scores, p2Score: scores.p2Score +1};
        setScores(newScores)
    }
    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>Add score to player 1</button>
            <button onClick={increaseP2Score} >Add score to player 2</button>
        </div>
    )
}