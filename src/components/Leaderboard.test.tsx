import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import Leaderboard from "./Leaderboard";

test("renders leaderboard with correct text", async () => {
  store.dispatch(
    fetchDanceOffs.fulfilled(
      [{ id: 1, winner: 1, loser: 2, dancedAt: "2024-05-30T12:00:00.000Z" }],
      "",
      undefined
    )
  );
  const { getByText } = render(
    <Provider store={store}>
      <Leaderboard />
    </Provider>
  );
  await waitFor(() =>
    expect(
      getByText(
        /Winner: Robot 1 | Loser: Robot 2 | Date: 5\/30\/2024, 12:00:00 PM/i
      )
    ).toBeInTheDocument()
  );
});
