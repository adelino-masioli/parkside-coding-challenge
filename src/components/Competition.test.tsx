import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/store";
import Competition from "./Competition";

test("renders start competition button", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Competition />
    </Provider>
  );
  const buttonElement = getByText(/Start New Competition/i);
  expect(buttonElement).toBeInTheDocument();
});

test("clicking start competition button dispatches fetchRobots action", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Competition />
    </Provider>
  );
  fireEvent.click(getByText(/Start New Competition/i));
  expect(store.getState().robots.status).toEqual("loading");
});
