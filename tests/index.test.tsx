import { render, screen } from "@testing-library/react";
import Index, { meta } from "../app/routes/_index"; // Adjust the import based on your actual file structure
import { describe, it, expect } from "vitest";

describe("Index Route", () => {
  it("renders the index component successfully", () => {
    // Act: Render the Index component
    render(<Index />);

    // Assert: Check that the component renders correctly
    expect(screen.getByText(/welcome to/i)).toBeInTheDocument();
    expect(screen.getByText(/what's next?/i)).toBeInTheDocument();
  });

  it("sets the correct meta tags", () => {
    // Act: Call the meta function
    const result = meta();

    // Assert: Check that the meta tags are correct
    expect(result).toEqual([
      { title: "New Remix App" },
      { name: "description", content: "Welcome to Remix!" },
    ]);
  });
});
