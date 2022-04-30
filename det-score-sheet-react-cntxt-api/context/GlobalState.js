import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state holding example turns
const initialState = {
    startingTurns:
    [
        {
            id: 11,
            text: "e4",
            scoredPoints: 0,
            cashPoints: 0
        }, 
        {
            id: 21,
            text: "e x d5",
            scoredPoints: 1,
            cashPoints: 0
        },
        {
            id: 31,
            text: "B-MSDI-e1",
            scoredPoints: -2,
            cashPoints: 2
        }, 
        {
            id: 41,
            text: "E = d1",
            scoredPoints: 0,
            cashPoints: 1
        }
    ],
    respondingTurns:
    [
        {
            id: 12,
            text: "d5",
            scoredPoints: 0,
            cashPoints: 0
        }, 
        {
            id: 22,
            text: "G x d5",
            scoredPoints: 1,
            cashPoints: 0
        }, 
        {
            id: 32,
            text: "D-MTN-g7",
            scoredPoints: 0,
            cashPoints: 4
        }, 
        {
            id: 42,
            text: "IMD-U",
            scoredPoints: -5,
            cashPoints: 0
        }
    ]
}

//Creating context
export const GlobalContext = createContext(initialState);

//Create Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//actions that make calls to the reducer
function deleteStartingTurn(id) {
    dispatch({
        type: "DELETE_STARTING_TURN",
        payload: id
    });
}

function addStartingTurn(newStartingTurn) {
    dispatch({
        type: "ADD_STARTING_TURN",
        payload: newStartingTurn
    });
}

function deleteRespondingTurn(id) {
    dispatch({
        type: "DELETE_RESPONDING_TURN",
        payload: id
    });
}

function addRespondingTurn(newRespondingTurn) {
    dispatch({
        type: "ADD_RESPONDING_TURN",
        payload: newRespondingTurn
    });
}


    return (<GlobalContext.Provider value={{
        startingTurns: state.startingTurns,
        respondingTurns: state.respondingTurns,
        deleteStartingTurn,
        addStartingTurn,
        deleteRespondingTurn,
        addRespondingTurn
    }}>
        { children }
    </GlobalContext.Provider>);
}