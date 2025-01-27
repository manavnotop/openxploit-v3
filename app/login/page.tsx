import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/lib/auth";
import { FaGoogle } from "react-icons/fa";

export default function Test(){
  return(
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>Welcome to Openxploit</CardTitle>
          <CardDescription>We're glad to have you here!</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Please sign in to continue.</p>
        </CardContent>
        <CardFooter>
          <form
            action={async() => {
              "use server"
              await signIn("google");
            }}
          >
            <Button className="w-full">
              <FaGoogle className="mr-2 h-4 w-4" />
              Sign In with Google
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}