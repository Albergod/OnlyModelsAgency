export const FORMFETCH = async (date) => {
  const response = await fetch(
    "http://localhost:4000/api/models/createnewmodel-admin",
    {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(date),
      method: "POST",
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};
