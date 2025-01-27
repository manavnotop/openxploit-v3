import SignIn from "@/components/SignIn";
import { signIn } from "@/lib/auth";

export default function Test(){
  return(
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}