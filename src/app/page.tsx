import getOpenApiSpec from "@/lib/functions/getOpenApiSpec";
import getServices from "@/lib/functions/getServices";

export default async function Home() {
  const apiSpec = await getOpenApiSpec();
  const fileNames = await getServices();
  return <pre>{JSON.stringify(fileNames, null, 2)}</pre>;
}
