import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}

//If a error here is present
//Add this to line 9
// @ ts-expect-error Server Component
