import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const StartingCash = () => {
  const { startingTurns } = useContext(GlobalContext);

  const startingCashPoints = startingTurns.map(startingTurn => startingTurn.cashPoints);
  const total = startingCashPoints.reduce((acc, item) => (acc += item), 39).toFixed(2);

  return (
    <>
        <h5>Starting Player's Cash Value Points</h5>
        <h1>{ total }</h1>
    </>
  )
}

export default StartingCash;