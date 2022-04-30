import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const RespondingTurn = ({ respondingTurn }) => {
    const { deleteRespondingTurn } = useContext(GlobalContext);

    const scoreSign = respondingTurn.scoredPoints < 0 ? "-" : "+";

    const cashSign = respondingTurn.cashPoints < 0 ? "-" : "+";

    return (
            <li className="points-plus">
                { respondingTurn.text } <span>{ scoreSign }${Math.abs(respondingTurn.scoredPoints)}</span><span>{ cashSign }${Math.abs(respondingTurn.cashPoints)}</span><button onClick={() => deleteRespondingTurn(respondingTurn.id)} className="delete-btn">x</button>
            </li>
    )
}

export default RespondingTurn