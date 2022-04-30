import React from "react";

import StartingHeader from "./startingPlayerComponents/StartingHeader";
import StartingScore from "./startingPlayerComponents/StartingScore";
import StartingCash from "./startingPlayerComponents/StartingCash";
import StartPlusMinusPoints from "./startingPlayerComponents/StartPlusMinusPoints";
import StartTurnList from "./startingPlayerComponents/StartTurnList";
import AddStartingTurn from "./startingPlayerComponents/AddStartingTurn";
import "./App.css";

import RespondingHeader from "./respondingPlayerComponents/RespondingHeader";
import RespondingCash from "./respondingPlayerComponents/RespondingCash";
import RespondingScore from "./respondingPlayerComponents/RespondingScore";
import RespondPlusMinusPoints from "./respondingPlayerComponents/RespondPlusMinusPoints";
import RespondTurnList from "./respondingPlayerComponents/RespondTurnList";
import AddRespondingTurn from "./respondingPlayerComponents/AddRespondingTurn";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
        <h1>Deterrence Score Sheet</h1>
        <span>
          <StartingHeader />
        </span>
        <span className="container">
            <StartingScore />
            <StartingCash />
            <StartPlusMinusPoints />
            <StartTurnList />
            <AddStartingTurn />
        </span>
        <span>
          <RespondingHeader />
        </span>
        <span className="container">
            <RespondingScore />
            <RespondingCash />
            <RespondPlusMinusPoints />
            <RespondTurnList />
            <AddRespondingTurn />
        </span>

    </GlobalProvider>
  )
};

export default App;
