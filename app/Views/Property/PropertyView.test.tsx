import { useReducer } from "react";
import { render, screen, waitFor } from "@testing-library/react";
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
});
