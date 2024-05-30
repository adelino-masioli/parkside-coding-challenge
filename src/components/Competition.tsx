import React from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchRobots } from "../features/robots/robotsSlice";
import { Button } from "./@/ui/button"; // Import the Button component

const Competition: React.FC = () => {
  const dispatch = useAppDispatch(); // Get the dispatch function from Redux

  // Define a function to handle starting a new competition
  const handleStartCompetition = () => {
    dispatch(fetchRobots()); // Dispatch the fetchRobots action to fetch robots data
  };

  return (
    <div>
      {/* Render a Button component with onClick event handler to start the competition */}
      <Button variant="outline" onClick={handleStartCompetition}>
        Start New Competition
      </Button>
    </div>
  );
};

export default Competition; // Export the Competition component
