import { useReducer } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StateProvider } from "../../context/PropertyContext";
import { reducer } from "../../reducers/PropertyReducer";
import PropertyView from "./PropertyView";
import { describe, it, expect } from "vitest";

const initialState = {
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
  it("renders PropertyView", () => {
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
    fireEvent.click(updateButton);

    const propertyOneElements = screen.getAllByText(/Property One:/i);
    expect(propertyOneElements[0]).toHaveTextContent("-100"); // Adjust based on your reducer logic
  });

  it("updates Property Two when button is clicked", () => {
    render(
      <MockStateProvider>
        <PropertyView />
      </MockStateProvider>
    );

    const updateButton = screen.getAllByText(/Update Property Two/i)[0];
    fireEvent.click(updateButton);

    const propertyTwoElements = screen.getAllByText(/Property Two:/i);
    expect(propertyTwoElements[0]).toHaveTextContent("100"); // Adjust based on your reducer logic
  });
});
