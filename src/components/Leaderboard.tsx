import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchDanceOffs } from "../features/danceOffs/danceOffsSlice";
import { DanceOffResult } from "../types";
import Card from "./Card"; // Import the Card component

const Leaderboard: React.FC = () => {
  const dispatch = useAppDispatch(); // Get the dispatch function from Redux
  const danceOffResults = useAppSelector((state) => state.danceOffs.results); // Get the dance off results from Redux state

  // Fetch dance offs when component mounts
  useEffect(() => {
    dispatch(fetchDanceOffs());
  }, [dispatch]); // Dispatch the fetchDanceOffs action only once when component mounts

  return (
    <div>
      {/* Render the title */}
      <h2 className="text-2xl font-bold">Leaderboard</h2>

      {/* Map through dance off results and render a Card for each result */}
      {danceOffResults.map((result: DanceOffResult) => (
        <Card key={result.id}>
          {" "}
          {/* Use result id as key for optimization */}
          {/* Display dance off details */}
          <p>
            Winner: Robot {result.winner} | Loser: Robot {result.loser} | Date:{" "}
            {new Date(result.dancedAt).toLocaleString()}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default Leaderboard; // Export the Leaderboard component
