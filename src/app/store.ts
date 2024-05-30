import { configureStore } from "@reduxjs/toolkit";
import danceOffsReducer from "../features/danceOffs/danceOffsSlice";
import robotsReducer from "../features/robots/robotsSlice";
import teamsReducer from "../features/teams/teamsSlice";

// Configure the Redux store with reducers
export const store = configureStore({
  reducer: {
    robots: robotsReducer, // Add the robotsReducer to handle robots state
    teams: teamsReducer, // Add the teamsReducer to handle teams state
    danceOffs: danceOffsReducer, // Add the danceOffsReducer to handle dance offs state
  },
});

// Define the RootState type for strongly typing useSelector hook
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type for strongly typing useDispatch hook
export type AppDispatch = typeof store.dispatch;
