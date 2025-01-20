export const sum = async (a: number, b: number): Promise<number> => {
  const response = await fetch("http://localhost:3000/api/sum", {
    body: JSON.stringify({ a, b }),
    method: "POST",
  });

  const json = (await response.json()) as any;

  return json.result;
};
