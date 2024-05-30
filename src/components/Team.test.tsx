import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Team from "./Team";

const mockStore = configureStore([]);

describe("Team component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      robots: {
        robots: [
          {
            id: 1,
            name: "Robot 1",
            powermove: "Move 1",
            experience: 10,
            outOfOrder: false,
          },
          {
            id: 2,
            name: "Robot 2",
            powermove: "Move 2",
            experience: 20,
            outOfOrder: false,
          },
          {
            id: 3,
            name: "Robot 3",
            powermove: "Move 3",
            experience: 30,
            outOfOrder: false,
          },
          {
            id: 4,
            name: "Robot 4",
            powermove: "Move 4",
            experience: 40,
            outOfOrder: false,
          },
          {
            id: 5,
            name: "Robot 5",
            powermove: "Move 5",
            experience: 50,
            outOfOrder: false,
          },
          {
            id: 6,
            name: "Robot 6",
            powermove: "Move 6",
            experience: 60,
            outOfOrder: false,
          },
          {
            id: 7,
            name: "Robot 7",
            powermove: "Move 7",
            experience: 70,
            outOfOrder: false,
          },
        ],
      },
    });
  });

  test('renders component with "Create Teams" button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Team />
      </Provider>
    );
    const buttonElement = getByText(/Create Teams/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('dispatches createTeams action when "Create Teams" button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Team />
      </Provider>
    );
    const buttonElement = getByText(/Create Teams/i);
    fireEvent.click(buttonElement);
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "teams/createTeams",
        payload: [
          {
            name: "Team A",
            members: [
              {
                id: 1,
                name: "Robot 1",
                powermove: "Move 1",
                experience: 10,
                outOfOrder: false,
              },
            ],
          },
          {
            name: "Team B",
            members: [
              {
                id: 2,
                name: "Robot 2",
                powermove: "Move 2",
                experience: 20,
                outOfOrder: false,
              },
            ],
          },
        ],
      },
    ]);
  });
});
