// tests/greet.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { createRemixStub } from "@remix-run/testing";

import { describe, it, expect } from "vitest";
import Interact, { loader } from "../app/routes/interact";
import { State } from "../app/context/types";

describe("Greet component", () => {
  it("displays the initial state values", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: Interact,
        loader() {
          const initialState: State = {
            propertyOne: 0,
            propertyTwo: 0,
          };
          return { initialState };
        },
      },
    ]);

    render(<RemixStub />);

    // Use waitFor to wait for the elements to appear
    await waitFor(() => {
      expect(screen.getByText(/Property One:/)).toBeInTheDocument();
      expect(screen.getByText(/Property Two:/)).toBeInTheDocument();
    });

    // Check the displayed values
    expect(screen.getByText("Property One:")).toHaveTextContent("0");
    expect(screen.getByText("Property Two:")).toHaveTextContent("0");
  });

  it("tests loader", async () => {
    const response = await loader(); // Await the loader function
    const initialState = await response.json(); // Parse the response to get the JSON data

    expect(initialState).toEqual({
      initialState: {
        propertyOne: 0,
        propertyTwo: 0,
      },
    });
  });
});
