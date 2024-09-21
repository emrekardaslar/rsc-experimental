// tests/greet.test.tsx
//https://remix.run/docs/en/main/utils/create-remix-stub
import { render, screen, waitFor } from "@testing-library/react";
import { createRemixStub } from "@remix-run/testing";

import { describe, it } from "vitest";
import Greet, { loader } from "../app/routes/greet";

describe("Greet component", () => {
  it("displays the greeting message", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: Greet,
        loader() {
          return { message: "Hello, Remix with Vitest!" };
        },
      },
    ]);
    render(<RemixStub />);
    await waitFor(() => screen.findByText("Hello, Remix with Vitest!"));
  });

  it("tests loader", () => {
    loader();
  });
});
