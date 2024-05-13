export default async function getService(service: string) {
  const url = `https://raw.githubusercontent.com/new-black/eva-apispec/main/spec/src/services/${service}.json`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
