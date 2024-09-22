import { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import { State } from "../../context/types";
import { reducer } from "../../reducers/reducer";
import PropertyView from "./PropertyView";
import { describe, it, expect, vi } from "vitest";

const initialState: State = {
  propertyOne: 0,
  propertyTwo: 0,
};

const MockStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateProvider state={state} dispatch={dispatch}>
      {children}
    </StateProvider>
  );
};

describe("PropertyView", () => {
  it("renders SomeComponent", () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    // Use getAllByText if you expect multiple matches
    const propertyOneElements = screen.getAllByText(/Property One/i);
    const propertyTwoElements = screen.getAllByText(/Property Two/i);

    expect(propertyOneElements.length).toBeGreaterThan(0); // Check if at least one exists
    expect(propertyTwoElements.length).toBeGreaterThan(0); // Check if at least one exists
  });

  it("updates Property One when button is clicked", async () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    const updateButtons = screen.getAllByText(/Update Property One/i);
    fireEvent.click(updateButtons[0]); // Click the first button

    const propertyOneElement = screen.getAllByText(/Property One:/i)[0];
    expect(propertyOneElement).toHaveTextContent("Property One: -100"); // Adjust based on your reducer logic
  });

  it("updates Property Two when button is clicked", async () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    const updateButtons = screen.getAllByText(/Update Property Two/i);
    fireEvent.click(updateButtons[0]); // Click the first button

    const propertyTwoElement = screen.getAllByText(/Property Two:/i)[0];
    expect(propertyTwoElement).toHaveTextContent("Property Two: 100"); // Adjust based on your reducer logic
  });
});
