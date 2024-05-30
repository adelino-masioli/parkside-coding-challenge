import React from "react";
import "./App.css";
import Competition from "./components/Competition";
import Leaderboard from "./components/Leaderboard";
import Team from "./components/Team";

const App: React.FC = () => {
  return (
    <div className="App">
      <Competition />
      <Team />
      <Leaderboard />
    </div>
  );
};

export default App;
