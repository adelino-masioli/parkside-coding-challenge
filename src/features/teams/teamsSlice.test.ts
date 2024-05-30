import teamsReducer, { createTeams } from "./teamsSlice";

describe("teams reducer", () => {
  const initialState = {
    teams: [],
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(teamsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle createTeams", () => {
    const teams = [
      { name: "Team A", members: [] },
      { name: "Team B", members: [] },
    ];
    const actual = teamsReducer(initialState, createTeams(teams));
    expect(actual.status).toEqual("succeeded");
    expect(actual.teams).toEqual(teams);
  });
});
