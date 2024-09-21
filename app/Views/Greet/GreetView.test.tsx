import { render, screen, waitFor } from "@testing-library/react";
import Greet from "./ShowGreet"; // Update the import path if necessary
import { GreetRepository } from "../../repository/GreetRepository";
import { describe, it, expect, vi } from "vitest";

// Mock the GreetRepository
vi.mock("../../repository/GreetRepository");

describe("Greet Component", () => {
  it("displays the greeting message", async () => {
    // Arrange: Set up the mock to return a greeting message
    (GreetRepository.getGreeting as vi.Mock).mockResolvedValue({
      message: "Hello, Test!",
    });

    // Act: Render the Greet component
    render(<Greet />);

    // Wait for the greeting message to be displayed
    const greetingMessage = await screen.findByText("Hello, Test!");

    // Assert: Check that the greeting message is rendered
    expect(greetingMessage).toBeInTheDocument();
  });

  it("displays an error message when loading fails", async () => {
    // Arrange: Set up the mock to reject with an error
    (GreetRepository.getGreeting as vi.Mock).mockRejectedValue(
      new Error("Failed to fetch")
    );

    // Act: Render the Greet component
    render(<Greet />);

    // Wait for the error message to be displayed
    const errorMessage = await screen.findByText("Failed to load greeting");

    // Assert: Check that the error message is rendered
    expect(errorMessage).toBeInTheDocument();
  });
});
