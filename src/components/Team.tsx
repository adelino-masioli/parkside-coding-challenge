import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"; // Import the necessary hooks from Redux
import { createTeams } from "../features/teams/teamsSlice"; // Import the createTeams action from Redux slice
import { Robot } from "../types"; // Import the Robot type
import { Button } from "./@/ui/button"; // Import the Button component

const Team: React.FC = () => {
  const robots = useAppSelector((state) => state.robots.robots); // Get the robots from Redux state
  const dispatch = useAppDispatch(); // Get the dispatch function from Redux

  // Define a function to create teams based on available robots and their experience
  const handleCreateTeams = () => {
    const teamA: Robot[] = []; // Initialize an empty array for Team A
    const teamB: Robot[] = []; // Initialize an empty array for Team B
    let totalExperienceA = 0; // Initialize total experience for Team A
    let totalExperienceB = 0; // Initialize total experience for Team B

    // Loop through each robot to assign them to teams based on conditions
    robots.forEach((robot) => {
      if (!robot.outOfOrder) {
        // Check if the robot is not out of order
        if (teamA.length < 5 && totalExperienceA + robot.experience <= 50) {
          // Check if Team A is not full and adding the robot does not exceed total experience limit
          teamA.push(robot); // Add the robot to Team A
          totalExperienceA += robot.experience; // Update the total experience for Team A
        } else if (
          teamB.length < 5 &&
          totalExperienceB + robot.experience <= 50
        ) {
          // Check if Team B is not full and adding the robot does not exceed total experience limit
          teamB.push(robot); // Add the robot to Team B
          totalExperienceB += robot.experience; // Update the total experience for Team B
        }
      }
    });

    // Dispatch the createTeams action with the teams data
    dispatch(
      createTeams([
        { name: "Team A", members: teamA },
        { name: "Team B", members: teamB },
      ])
    );
  };

  return (
    <div>
      {/* Render a button to create teams with onClick event handler */}
      <Button onClick={handleCreateTeams}>Create Teams</Button>
      {/* Placeholder for rendering teams */}
    </div>
  );
};

export default Team; // Export the Team component
