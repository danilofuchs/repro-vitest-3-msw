import { describe, onTestFinished, test, vi } from "vitest";

describe("sum", () => {
  test("requests from API", async () => {
    console.log("1. Test start");
    vi.useFakeTimers();
    console.log("2. Clock frozen");

    onTestFinished(() => {
      console.log("4. Clock reset");
      vi.useRealTimers();
    });

    const response = await fetch("http://localhost:3000/api");

    console.log("3.1 API response received");

    const json = (await response.json()) as any;

    console.log("3.2. API response parsed");
  });
});
