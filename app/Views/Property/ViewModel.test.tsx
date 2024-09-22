import { renderHook, act } from "@testing-library/react";
import { StateProvider } from "../../context/PropertyContext";
import usePropertyViewModel from "./ViewModel";
import {
  ACTION_TYPE_ONE,
  ACTION_TYPE_TWO,
} from "../../actions/PropertyActions";
import { describe, it, expect, vi } from "vitest";

const initialState = {
  propertyOne: 200,
  propertyTwo: 0,
};

const mockDispatch = vi.fn();

const wrapper = ({ children }: any) => (
  <StateProvider state={initialState} dispatch={mockDispatch}>
    {children}
  </StateProvider>
);

describe("usePropertyViewModel", () => {
  it("updates Property One when handleUpdatePropertyOne is called", () => {
    const { result } = renderHook(() => usePropertyViewModel(), { wrapper });

    act(() => {
      result.current.handleUpdatePropertyOne();
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ACTION_TYPE_ONE,
      payload: 100, // 200 - 100
    });
  });

  it("updates Property Two when handleUpdatePropertyTwo is called", () => {
    const { result } = renderHook(() => usePropertyViewModel(), { wrapper });

    act(() => {
      result.current.handleUpdatePropertyTwo();
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: ACTION_TYPE_TWO,
      payload: 100, // 0 + 100
    });
  });
});
