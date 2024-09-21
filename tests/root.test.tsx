import { render } from "@testing-library/react";
import App, { Layout, links } from "../app/root";
import { describe, it } from "vitest";

describe("App Component", () => {
  it("renders the root component successfully", () => {
    render(<App />);
    links();
    const dummyComponent = <>Hello</>;
    Layout({ children: dummyComponent });
  });
});
