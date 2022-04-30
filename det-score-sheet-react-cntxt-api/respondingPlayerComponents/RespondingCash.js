import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const RespondingCash = () => {
  const { respondingTurns } = useContext(GlobalContext);

  const respondingCashPoints = respondingTurns.map(respondingTurn => respondingTurn.cashPoints);
  const total = respondingCashPoints.reduce((acc, item) => (acc += item), 39).toFixed(2);

  return (
    <>
        <h5>Responding Player's Cash Value Points</h5>
        <h1>{ total }</h1>
    </>
  )
}

export default RespondingCash;