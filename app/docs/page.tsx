import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { requireUser } from "@/lib/hook"

export default async function Docs(){
  const session = await requireUser();
  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   this is the Documentation page.
    // </div>
    <AnimatedGridPattern />
  )
}