import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("fixed top-0 w-full bg-black/80 backdrop-blur-sm border-gray-200 z-50", className)}>
      <div className="container mx-auto px-32 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">openXploit</span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "text-gray-400 hover:text-white transition-colors text-sm"
                )}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "text-gray-400 hover:text-white transition-colors text-sm"
                )}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}