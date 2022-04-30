import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import RespondingTurn from "./RespondingTurn";

const RespondTurnList = () => {
  const { respondingTurns } = useContext(GlobalContext);

  return (
    <>
        <h4>Responding Player's Turns</h4>
        <ul className="list">
          {respondingTurns.map(respondingTurn => (<RespondingTurn key={respondingTurn.id} respondingTurn={respondingTurn}/>))};
        </ul>
    </>
  )
}

export default RespondTurnList;