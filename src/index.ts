export const sum = async (a: number, b: number): Promise<number> => {
  const response = await fetch("http://localhost:3000/api/sum", {
    body: JSON.stringify({ a, b }),
    method: "POST",
  });
  console.log("3.1 API response received");

  const json = (await response.json()) as any;

  console.log("3.2. API response parsed");

  return json.result;
};
