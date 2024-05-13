import getServices from "@/lib/functions/getServices";
import SidebarItemsComponent from "@/components/SidebarItems";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = await getServices();
  return (
    <div className="flex gap-3">
      <div className="h-fill w-full max-w-xs bg-content2 p-4">
        <SidebarItemsComponent services={services} />
        <pre>{JSON.stringify(services, null, 2)}</pre>
      </div>
      {children}
    </div>
  );
}
