import { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StateProvider } from "../../context/Context";
import { State } from "../../context/types";
import { reducer } from "../../reducers/reducer";
import PropertyView from "./PropertyView";
import { describe, it, expect, vi } from "vitest";
import { ACTION_TYPE_ONE, ACTION_TYPE_TWO } from "../../actions/actions";

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

    const propertyOneElements = screen.getAllByText(/Property One/i);
    const propertyTwoElements = screen.getAllByText(/Property Two/i);

    expect(propertyOneElements.length).toBeGreaterThan(0);
    expect(propertyTwoElements.length).toBeGreaterThan(0);
  });

  it("updates Property One when button is clicked", () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    const updateButton = screen.getAllByText(/Update Property One/i)[0];
    fireEvent.click(updateButton); // Click the first button

    const propertyOneElement = screen.getAllByText(/Property One:/i)[0];
    expect(propertyOneElement).toHaveTextContent("Property One: -100"); // Adjust based on your reducer logic

    // Assert the updated state
    const stateAfterUpdate = reducer(initialState, {
      type: ACTION_TYPE_ONE,
      payload: -100,
    });
    expect(stateAfterUpdate.propertyOne).toBe(-100); // Expected value after update
  });

  it("updates Property Two when button is clicked", () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    const updateButton = screen.getAllByText(/Update Property Two/i)[0];
    fireEvent.click(updateButton); // Click the first button

    const propertyTwoElement = screen.getAllByText(/Property Two:/i)[0];
    expect(propertyTwoElement).toHaveTextContent("Property Two: 100"); // Adjust based on your reducer logic

    // Assert the updated state
    const stateAfterUpdate = reducer(initialState, {
      type: ACTION_TYPE_TWO,
      payload: 100,
    });
    expect(stateAfterUpdate.propertyTwo).toBe(100); // Expected value after update
  });

  it("handles error on non-existing action", () => {
    expect(() => {
      reducer(initialState, { type: "UNKNOWN_ACTION", payload: 0 });
    }).toThrow("Unknown action: UNKNOWN_ACTION");
  });
});
