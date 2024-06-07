import { Outlet } from "@remix-run/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { DEFAULT_FONT_SIZE } from "~/lib/const";
import Navbar from "./navbar";
export function LayoutUI() {
  const [font, setFont] = useState(DEFAULT_FONT_SIZE);

  // synchronize initially
  // useLayoutEffect(() => {
  //   const fontSize = window.localStorage.getItem("fontSize");
  //   setFont(fontSize || DEFAULT_FONT_SIZE);
  // }, []);

  // synchronize on change
  useEffect(() => {
    document.documentElement.style.setProperty("--base-font-size", font);
    window.localStorage.setItem("fontSize", font);
  }, [font]);

  return (
    <div className="sm:grid h-full w-full sm:custom-grid min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
}
