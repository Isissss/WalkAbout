import { Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, NavLink, Outlet } from "@remix-run/react";
import { NAV_LINKS } from "~/lib/const";
import { FaPersonRunning } from "react-icons/fa6";
import { useEffect, useLayoutEffect, useState } from "react";
import { DEFAULT_FONT_SIZE } from "~/lib/const";
export function LayoutUI() {
  const [font, setFont] = useState(DEFAULT_FONT_SIZE);

  // synchronize initially
  useLayoutEffect(() => {
    const fontSize = window.localStorage.getItem("fontSize");
    setFont(fontSize || DEFAULT_FONT_SIZE);
  }, []);

  // synchronize on change
  useEffect(() => {
    document.documentElement.style.setProperty("--base-font-size", font);
    window.localStorage.setItem("fontSize", font);
  }, [font]);

  return (
    <div className="grid min-h-screen w-full md:custom-grid lg:custom-grid">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={(props) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      props.isActive ? "text-primary" : ""
                    }`;
                  }}
                >
                  {link.icon || ""}
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* Phone nav */}
      <div className="flex flex-col sm:hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    {link.icon || ""}
                    {link.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        {/* End Phone Nav */}
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
}
