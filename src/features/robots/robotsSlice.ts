import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Import necessary functions from Redux Toolkit
import axios from "axios"; // Import axios for making HTTP requests
import { Robot } from "../../types"; // Import the Robot type

// Define the shape of the robots state
interface RobotsState {
  robots: Robot[]; // Array to store robots
  status: "idle" | "loading" | "succeeded" | "failed"; // Status of the async action
  error: string | null; // Error message if fetching robots fails
}

// Initial state of the robots slice
const initialState: RobotsState = {
  robots: [], // Empty array initially
  status: "idle", // Initial status is idle
  error: null, // No error initially
};

// Async thunk to fetch robots from the API
export const fetchRobots = createAsyncThunk(
  "robots/fetchRobots", // Action type
  async () => {
    // Asynchronous function to fetch robots
    const response = await axios.get(
      // Axios used to make HTTP GET request
      "https://challenge.parkside-interactive.com/api/robots" // API endpoint
    );
    return response.data; // Return the response data
  }
);

// Create the robots slice
const robotsSlice = createSlice({
  name: "robots", // Slice name
  initialState, // Initial state
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => {
    // Define extra reducers for handling async action lifecycle
    builder
      .addCase(fetchRobots.pending, (state) => {
        // Reducer for handling pending action
        state.status = "loading"; // Set status to loading
      })
      .addCase(fetchRobots.fulfilled, (state, action) => {
        // Reducer for handling successful action
        state.status = "succeeded"; // Set status to succeeded
        state.robots = action.payload; // Update robots with fetched data
      })
      .addCase(fetchRobots.rejected, (state, action) => {
        // Reducer for handling failed action
        state.status = "failed"; // Set status to failed
        state.error = action.error.message || "Failed to fetch robots"; // Set error message
      });
  },
});

export default robotsSlice.reducer; // Export the reducer
