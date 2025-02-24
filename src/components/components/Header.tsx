import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto w-[80%] px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl text-[#1A73E8] font-bold ">
              accredian
            </Link>
            <NavigationMenu className="hidden bp2:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#1A73E8] text-white">
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[150px] p-4">
                      <ul>
                        <li>Course 1</li>
                        <li>Course 2</li>
                        <li>Course 3</li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <nav className="flex items-center gap-6">
            <div className="bp3:flex items-center hidden gap-6">
              <Link href="/refer" className="text-sm font-medium">
                Refer & Earn
              </Link>
              <Link href="/resources" className="text-sm font-medium">
                Resources
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About Us
              </Link>
            </div>
            <Button
              variant={"secondary"}
              className="text-sm bp3:block hidden font-medium"
            >
              Login
            </Button>
            <Button
              variant={"default"}
              className="bg-[#1A73E8] bp4:block hidden"
            >
              Try for free
            </Button>
            <Menu className="w-6 h-6 bp4:hidden block" />
          </nav>
        </div>
      </div>
    </header>
  );
}
