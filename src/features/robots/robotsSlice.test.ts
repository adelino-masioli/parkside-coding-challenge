import robotsReducer, { fetchRobots } from "./robotsSlice";

describe("robots reducer", () => {
  const initialState = {
    robots: [],
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(robotsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle fetchRobots", () => {
    const actual = robotsReducer(initialState, fetchRobots.pending);
    expect(actual.status).toEqual("loading");
  });
});
