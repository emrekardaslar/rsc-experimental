// app/models/repository/GreetRepository.test.ts
import { describe, it, expect } from "vitest";
import { GreetRepository } from "./GreetRepository";

describe("GreetRepository", () => {
  it("should return a greeting message", async () => {
    const result = await GreetRepository.getGreeting();
    expect(result).toEqual({
      message: "Hello, Remix with MVVM and Repository!",
    });
  });
});
