import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const StartingScore = () => {
  const { startingTurns } = useContext(GlobalContext);

  const startingScorePoints = startingTurns.map(startingTurn => startingTurn.scoredPoints);
  const total = startingScorePoints.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h5>Starting Player's Score Sheet Game Points</h5>
        <h1>{ total }</h1>
    </>
  )
}

export default StartingScore;