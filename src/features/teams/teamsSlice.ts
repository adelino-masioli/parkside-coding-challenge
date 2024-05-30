import { createSlice } from "@reduxjs/toolkit"; // Import createSlice function from Redux Toolkit
import { Robot } from "../../types"; // Import the Robot type

// Define the shape of a team
interface Team {
  name: string; // Team name
  members: Robot[]; // Array of Robot members
}

// Define the shape of the teams state
interface TeamsState {
  teams: Team[]; // Array to store teams
}

// Initial state of the teams slice
const initialState: TeamsState = {
  teams: [], // Empty array initially
};

// Create the teams slice
const teamsSlice = createSlice({
  name: "teams", // Slice name
  initialState, // Initial state
  reducers: {
    createTeams: (state, action) => {
      // Reducer for creating teams
      state.teams = action.payload; // Set teams to the payload (array of teams)
    },
  },
});

export const { createTeams } = teamsSlice.actions; // Extract the createTeams action from the slice

export default teamsSlice.reducer; // Export the reducer
