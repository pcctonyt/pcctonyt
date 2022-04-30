import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const RespondingScore = () => {
  const { respondingTurns } = useContext(GlobalContext);

  const respondingScorePoints = respondingTurns.map(respondingTurn => respondingTurn.scoredPoints);
  const total = respondingScorePoints.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h5>Responding Player's Score Sheet Game Points</h5>
        <h1>{ total }</h1>
    </>
  )
}

export default RespondingScore;