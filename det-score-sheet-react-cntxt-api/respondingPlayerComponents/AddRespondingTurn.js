import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddRespondingTurn = () => {
    const [ text, setText ] = useState("");

    const [ scoredPoints, setScoredPoints ] = useState(0);
    const [ cashPoints, setCashPoints ] = useState(0);

    const { addRespondingTurn } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newRespondingTurn = {
            id:  Math.floor(Math.random() * 100000000 ),
            text,
            scoredPoints: +scoredPoints,
            cashPoints: +cashPoints
        }

        addRespondingTurn(newRespondingTurn);
    }

    return (
        <span>
            <h3>Add new Responding Turn</h3>
            <form onSubmit={onSubmit}>
                <span className="form-control">
                    <label htmlFor="text">Turn:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter turn codes..." />
                </span>
                <span className="form-control">
                    <label htmlFor="scoredPoints">Scored Points<br /></label>
                    <input type="number" value={scoredPoints} onChange={(e) => setScoredPoints(e.target.value)} placeholder="Enter Points Scored..." />
                </span>
                <span className="form-control">
                    <label htmlFor="cashPoints">Cash Value Points<br /></label>
                    <input type="number" value={cashPoints} onChange={(e) => setCashPoints(e.target.value)} placeholder="Enter New Cash Value Points..." />
                </span>
                <button className="btn">Add Starting Turn</button>
            </form>
        </span>
    )
}

export default AddRespondingTurn;