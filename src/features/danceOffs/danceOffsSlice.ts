import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DanceOffResult } from "../../types";

// Define the shape of the state
interface DanceOffState {
  results: DanceOffResult[]; // Array to store dance-off results
  status: "idle" | "loading" | "succeeded" | "failed"; // Status of the async action
  error: string | null; // Error message if fetching dance offs fails
}

// Initial state of the dance-offs slice
const initialState: DanceOffState = {
  results: [], // Empty array initially
  status: "idle", // Initial status is idle
  error: null, // No error initially
};

// Async thunk to fetch dance offs from the API
export const fetchDanceOffs = createAsyncThunk(
  "danceOffs/fetchDanceOffs", // Action type
  async () => {
    // Asynchronous function to fetch dance offs
    const response = await axios.get(
      // Axios used to make HTTP GET request
      "https://challenge.parkside-interactive.com/api/danceoffs" // API endpoint
    );
    return response.data as DanceOffResult[]; // Return the response data as DanceOffResult array
  }
);

// Create the dance offs slice
const danceOffsSlice = createSlice({
  name: "danceOffs", // Slice name
  initialState, // Initial state
  reducers: {}, // No additional reducers defined
  extraReducers: (builder) => {
    // Define extra reducers for handling async action lifecycle
    builder
      .addCase(fetchDanceOffs.pending, (state) => {
        // Reducer for handling pending action
        state.status = "loading"; // Set status to loading
      })
      .addCase(fetchDanceOffs.fulfilled, (state, action) => {
        // Reducer for handling successful action
        state.status = "succeeded"; // Set status to succeeded
        state.results = action.payload; // Update results with fetched data
      })
      .addCase(fetchDanceOffs.rejected, (state, action) => {
        // Reducer for handling failed action
        state.status = "failed"; // Set status to failed
        state.error =
          action.error.message || "Failed to fetch dance off results"; // Set error message
      });
  },
});

export default danceOffsSlice.reducer; // Export the reducer
