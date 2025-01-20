import { describe, onTestFinished, test, vi } from "vitest";
import { sum } from ".";

describe("sum", () => {
  test("requests from API", async () => {
    console.log("1. Test start");
    vi.useFakeTimers();
    console.log("2. Clock frozen");

    onTestFinished(() => {
      console.log("6. Clock reset");
      vi.useRealTimers();
    });

    await sum(1, 2);

    console.log("3. API called");
  });
});
