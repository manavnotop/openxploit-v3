import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default async function Test(){
  const session = await auth();
  if(session?.user){
    redirect('/dashboard');
  }
  return(
    <div className="min-h-screen flex items-center justify-center z-50">
      <Card className="w-[350px] mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to OpenXploit</CardTitle>
          <CardDescription className="mt-2">
            Secure Vulnerability Assessment Platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <form action={async() => {
            "use server";
            await signIn("google");
          }}>
            <Button
              variant="outline" 
              className="w-full flex items-center gap-3 py-5"
            >
              <FaGoogle />
              <span className="text-base">Sign Up with Google</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}