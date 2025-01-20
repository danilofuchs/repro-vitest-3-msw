import { http, HttpResponse } from "msw";
import type { SetupServerApi } from "msw/node";
import { vi } from "vitest";

export const useSumMock = (server: SetupServerApi, result: number) => {
  const sumMock = vi.fn();

  server.use(
    http.post(`http://localhost:3000/api/sum`, async ({ request }) => {
      const requestBody = await request.json();
      sumMock(requestBody);
      return HttpResponse.json(
        {
          result,
        },
        { status: 200 }
      );
    })
  );

  return { sumMock };
};
