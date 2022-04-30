export default (state, action) => {
    switch(action.type){
        case "DELETE_STARTING_TURN":
        return {
            ...state,
            startingTurns: state.startingTurns.filter(startingTurn => startingTurn.id !== action.payload)
        }
        case "ADD_STARTING_TURN":
        return {
            ...state,
            startingTurns: [...state.startingTurns, action.payload]
        }
        case "DELETE_RESPONDING_TURN":
        return {
            ...state,
            respondingTurns: state.respondingTurns.filter(respondingTurn => respondingTurn.id !== action.payload)
        }
        case "ADD_RESPONDING_TURN":
        return {
            ...state,
            respondingTurns: [...state.respondingTurns, action.payload]
        }
        default:
            return state;
    }
}