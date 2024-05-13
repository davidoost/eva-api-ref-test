import ServiceComponent from "@/components/Service";

export default async function Service({
  params,
}: {
  params: { service: string };
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-xl p-4">
        <ServiceComponent service={params.service} />
      </div>
    </div>
  );
}
