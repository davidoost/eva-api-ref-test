export default async function getOpenApiSpec() {
  const res = await fetch(
    "https://raw.githubusercontent.com/new-black/eva-apispec/main/output/openapi/openapi.json"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
