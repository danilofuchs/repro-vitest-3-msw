import { setupServer } from "msw/node";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  onTestFinished,
  test,
  vi,
} from "vitest";
import { sum } from ".";
import { useSumMock } from "test/use-sum-mock.js";

describe("sum", () => {
  console.log("setupServer()");
  const server = setupServer();
  console.log("setupServer() END");

  beforeAll(() => {
    console.log("server.listen()");
    server.listen();
    console.log("server.listen() END");
  });
  afterEach(() => {
    console.log("server.resetHandlers()");
    server.resetHandlers();
    console.log("server.resetHandlers() END");
  });
  afterAll(() => {
    console.log("server.close()");
    server.close();
    console.log("server.close() END");
  });

  test("requests from API", async () => {
    console.log("1. Test start");
    vi.useFakeTimers();
    console.log("2. Clock frozen");

    onTestFinished(() => {
      console.log("6. Clock reset");
      vi.useRealTimers();
    });

    useSumMock(server, 3);
    console.log("3. API mocked");

    await sum(1, 2);

    console.log("4. API called");
  });
});
