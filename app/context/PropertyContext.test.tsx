import { useStateContext, StateProvider } from "./PropertyContext";
import { State } from "./types";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

const initialState: State = {
  propertyOne: 0,
  propertyTwo: 0,
};

// Custom hook for testing context
const TestComponent = () => {
  const { state } = useStateContext();
  return (
    <>
      <div>{state.propertyOne}</div>
      <div>{state.propertyTwo}</div>
    </>
  );
};

describe("PropertyContext", () => {
  it("provides the correct initial state", () => {
    render(
      <StateProvider state={initialState} dispatch={() => {}}>
        <TestComponent />
      </StateProvider>
    );

    expect(screen.getAllByText("0")[0]).toBeInTheDocument(); // propertyOne
    expect(screen.getAllByText("0")[1]).toBeInTheDocument(); // propertyTwo
  });

  it("throws error when used outside of StateProvider", () => {
    const originalError = console.error; // Store the original console.error

    console.error = vi.fn(); // Mock console.error to prevent logging error during test

    try {
      render(<TestComponent />);
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "useStateContext must be used within a StateProvider"
      );
    }

    console.error = originalError; // Restore the original console.error
  });
});
