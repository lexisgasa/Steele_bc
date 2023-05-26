import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utilities";

export default function LuckyN({numDice = 2, goal = 7}){
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === goal;
    const roll = () => {
        setDice(getRolls(numDice))
    }
    return (
        <section className="LuckyN">
            <h1>Lucky {goal}</h1>
            {/* si iswinner es true, rendereiza eso */}
            <h2>{isWinner && "YOU WON!!!"}</h2>
            <Dice dice={dice}/>
            <button onClick={roll} >Re-roll dice</button>
        </section>
    )
}