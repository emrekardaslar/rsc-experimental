import { ACTION_TYPE_ONE, ACTION_TYPE_TWO } from "../actions/PropertyActions";
import { State } from "../context/types";
import { reducer } from "./PropertyReducer";
import { describe, it, expect } from "vitest";

const initialState: State = {
  propertyOne: 0,
  propertyTwo: 0,
};

describe("Property Reducer", () => {
  it("handles ACTION_TYPE_ONE", () => {
    const action = { type: ACTION_TYPE_ONE, payload: -100 };
    const newState = reducer(initialState, action);
    expect(newState.propertyOne).toBe(-100);
    expect(newState.propertyTwo).toBe(0);
  });

  it("handles ACTION_TYPE_TWO", () => {
    const action = { type: ACTION_TYPE_TWO, payload: 100 };
    const newState = reducer(initialState, action);
    expect(newState.propertyOne).toBe(0);
    expect(newState.propertyTwo).toBe(100);
  });

  it("throws error on unknown action", () => {
    expect(() => {
      reducer(initialState, {
        type: "UNKNOWN_ACTION",
        payload: 0,
      });
    }).toThrow("Unknown action: UNKNOWN_ACTION");
  });
});
