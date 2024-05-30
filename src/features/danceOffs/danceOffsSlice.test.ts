import danceOffsReducer, { fetchDanceOffs } from "./danceOffsSlice";

describe("danceOffs reducer", () => {
  const initialState = {
    results: [],
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(danceOffsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle fetchDanceOffs", () => {
    const actual = danceOffsReducer(initialState, fetchDanceOffs.pending);
    expect(actual.status).toEqual("loading");
  });
});
