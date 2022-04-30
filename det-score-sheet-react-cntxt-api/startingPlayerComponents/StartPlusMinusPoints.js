import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const StartPlusMinusPoints = () => {
    const { startingTurns } = useContext(GlobalContext);

    const scoredTotal = startingTurns.map(startingTurn => startingTurn.scoredPoints);

    const cashTotal = startingTurns.map(startingTurn => startingTurn.cashPoints);

    const startingPlusScorePoints = scoredTotal.filter(startingPoints => startingPoints > 0).reduce((acc, startingPoints) => (acc += startingPoints), 0).toFixed(2);

    const startingMinusScorePoints = (scoredTotal.filter(startingPoints => startingPoints < 0).reduce((acc, startingPoints) => (acc += startingPoints), 0) * -1).toFixed(2);

    const startingPlusCashPoints = cashTotal.filter(startingPoints => startingPoints > 0).reduce((acc, startingPoints) => (acc += startingPoints), 0).toFixed(2);

    const startingMinusCashPoints = (cashTotal.filter(startingPoints => startingPoints < 0).reduce((acc, startingPoints) => (acc += startingPoints), 0) * -1).toFixed(2);

    return (
        <div className="starting-cash-score-container">
            <span className="score-points">
            <h4>+ Score Points</h4>
            <p className="score-points-plus">{ startingPlusScorePoints }</p>
            </span>
            <span className="score-points">
            <h4>- Score Points</h4>
            <p className="score-points-minus">{ startingMinusScorePoints }</p>
            </span>
            <span className="cash-points">
            <h4>+ Cash Points</h4>
            <p className="cash-points-plus">{ startingPlusCashPoints }</p>
            </span>
            <span className="cash-points">
            <h4>- Cash Points</h4>
            <p className="cash-points-minus">{ startingMinusCashPoints }</p>
            </span>
        </div>
    )
}

export default StartPlusMinusPoints;