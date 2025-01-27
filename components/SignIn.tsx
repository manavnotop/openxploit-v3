import { auth, signIn } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const session = await auth();

  if(session?.user){
    redirect('/dashboard');
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google");
      }}
    >
      <button className="bg-blue-500 px-4 py-2 rounded text-white" type="submit">Sign In with Google</button>
    </form>
  )
}