import { signOut } from "@/lib/auth";

export async function SignOut(){
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="bg-blue-500 px-4 py-2 rounded text-white" type="submit">Log Out</button>
    </form>
  );
}