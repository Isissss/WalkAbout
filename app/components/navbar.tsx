import { NavLink } from "@remix-run/react";
import { NAV_LINKS } from "~/lib/const";

export default function Navbar() {
  return (
    <nav className="h-16 flex flex-row space-x-5">
      {NAV_LINKS.map((link) => {
        return (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "font-bold" : "after:content-[data]"
            }
          >
            {link.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
