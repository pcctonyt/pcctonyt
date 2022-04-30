import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const RespondPlusMinusPoints = () => {
    const { respondingTurns } = useContext(GlobalContext);

    const scoredTotal = respondingTurns.map(respondingTurn => respondingTurn.scoredPoints);

    const cashTotal = respondingTurns.map(respondingTurn => respondingTurn.cashPoints);

    const respondingPlusScorePoints = scoredTotal.filter(respondingPoints => respondingPoints > 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0).toFixed(2);

    const respondingMinusScorePoints = (scoredTotal.filter(respondingPoints => respondingPoints < 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0) * -1).toFixed(2);

    const respondingPlusCashPoints = cashTotal.filter(respondingPoints => respondingPoints > 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0).toFixed(2);

    const respondingMinusCashPoints = (cashTotal.filter(respondingPoints => respondingPoints < 0).reduce((acc, respondingPoints) => (acc += respondingPoints), 0) * -1).toFixed(2);

    return (
        <div className="responding-cash-score-container">
            <span className="score-points">
            <h4>+ Score Points</h4>
            <p className="score-points-plus">{ respondingPlusScorePoints }</p>
            </span>
            <span className="score-points">
            <h4>- Score Points</h4>
            <p className="score-points-minus">{ respondingMinusScorePoints }</p>
            </span>
            <span className="cash-points">
            <h4>+ Cash Points</h4>
            <p className="cash-points-plus">{ respondingPlusCashPoints }</p>
            </span>
            <span className="cash-points">
            <h4>- Cash Points</h4>
            <p className="cash-points-minus">{ respondingMinusCashPoints }</p>
            </span>
        </div>
    )
}

export default RespondPlusMinusPoints