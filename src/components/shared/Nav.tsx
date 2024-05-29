import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

// eslint-disable-next-line react-refresh/only-export-components
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/products", label: "Products" },
] as const;

const Nav = () => {
  return (
    <nav>
      <ul className="hidden sm:flex items-center gap-5">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) =>
                cn("text-gray-900 hover:text-primary", {
                  "text-primary": isActive,
                })
              }
              to={to}
            >
              {label}
            </NavLink>
          </li>
        ))}

        <li>
          <NavLink to="/sign-in">
            <Button>Login</Button>
          </NavLink>
        </li>
        <li>
          <NavLink className="flex group relative" to="/">
            <ShoppingCart className="size-5 group-hover:text-primary flex-shrink-0" />
            <span className="text-xs transition-all duration-300 group-hover:-right-1 ml-1 absolute -right-2 -top-3 -z-10 bg-primary rounded-full text-white size-5 flex items-center justify-center font-medium">
              10
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
