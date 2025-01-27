import { SignOut } from "@/components/SignOut";
import { requireUser } from "@/lib/hook";

export default async function Dashboard(){
  const session = await requireUser();
  return (
    <div className="min-h-screen flex justify-center items-center">
      this is the dashboard page.
      <SignOut />
    </div>
  );
}