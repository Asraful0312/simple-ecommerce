import { NavLink } from "react-router-dom";
import { SheetContent, SheetTrigger, Sheet } from "../ui/sheet";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "./Nav";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const MobileMenu = () => {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2 sm:hidden">
          <MenuIcon className="block sm:hidden" />
        </SheetTrigger>
        <SheetContent className="flex flex-col w-full pr-0 max-w-xs sm:hidden">
          <ul className="flex flex-col items-center gap-5 pt-20">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <SheetTrigger asChild>
                  <NavLink
                    className={({ isActive }) =>
                      cn("text-gray-900 text-2xl hover:text-primary", {
                        "text-primary": isActive,
                      })
                    }
                    to={to}
                  >
                    {label}
                  </NavLink>
                </SheetTrigger>
              </li>
            ))}

            <li>
              <SheetTrigger asChild>
                <NavLink to="/sign-in">
                  <Button size="lg">Login</Button>
                </NavLink>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <NavLink className="flex group relative mt-4" to="/">
                  <ShoppingCart className="size-7 group-hover:text-primary flex-shrink-0" />

                  <span className="text-xs transition-all duration-300 group-hover:-right-1 ml-1 absolute -right-2 -top-3 -z-10 bg-primary rounded-full text-white size-5 flex items-center justify-center font-medium">
                    10
                  </span>
                </NavLink>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
