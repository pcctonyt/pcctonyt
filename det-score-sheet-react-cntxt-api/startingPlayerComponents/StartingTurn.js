import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const StartingTurn = ({ startingTurn }) => {
    const { deleteStartingTurn } = useContext(GlobalContext);

    const scoreSign = startingTurn.scoredPoints < 0 ? "-" : "+";

    const cashSign = startingTurn.cashPoints < 0 ? "-" : "+";

    return (
            <li className="points-minus">
                { startingTurn.text } <span>{ scoreSign }${Math.abs(startingTurn.scoredPoints)}</span><span>{ cashSign }${Math.abs(startingTurn.cashPoints)}</span><button onClick={() => deleteStartingTurn(startingTurn.id)} className="delete-btn">x</button>
            </li>
    )
}

export default StartingTurn