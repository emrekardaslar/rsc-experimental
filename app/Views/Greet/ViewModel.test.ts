import useGreetViewModel from "./ViewModel";
import { GreetRepository } from "../../repository/GreetRepository";
import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";

vi.mock("../../repository/GreetRepository");

describe("useGreetViewModel", () => {
  it("loads greeting message successfully", async () => {
    // Arrange: Set up the mock to return a greeting message
    (GreetRepository.getGreeting as vi.Mock).mockResolvedValue({
      message: "Hello, Test!",
    });

    const { result } = renderHook(() => useGreetViewModel());

    // Act: Call the loadGreeting method
    act(() => {
      result.current.loadGreeting();
    });

    // Wait for the updated state
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async state updates

    // Assert: Check that the message is set correctly and error is empty
    expect(result.current.message).toBe("Hello, Test!");
    expect(result.current.error).toBe("");
  });

  it("handles error when loading greeting", async () => {
    // Arrange: Set up the mock to reject with an error
    (GreetRepository.getGreeting as vi.Mock).mockRejectedValue(
      new Error("Failed to fetch")
    );

    const { result } = renderHook(() => useGreetViewModel());

    // Act: Call the loadGreeting method
    act(() => {
      result.current.loadGreeting();
    });

    // Wait for the updated state
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async state updates

    // Assert: Check that error message is set correctly
    expect(result.current.error).toBe("Failed to load greeting");
    expect(result.current.message).toBe("");
  });
});
