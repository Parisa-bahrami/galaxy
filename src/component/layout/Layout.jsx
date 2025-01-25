import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import BottomNavbar from "./BottomNavbar";
import ScrollToTop from "./ScrollToTop";
import useLayoutStore from "../../stores/layoutStore";
import useAbsorbButton from "../../hooks/useAbsorbButton";
import { cn } from "../../utils/cn";

const Layout = () => {
  const scrollContainerRef = useRef(null);
  const location = useLocation();

  const setScrollContainer = useLayoutStore(
    (state) => state.setScrollContainer
  );

  const isHome = location.pathname === "/";

  useEffect(() => {
    setScrollContainer(scrollContainerRef);
  }, []);

  useAbsorbButton();

  return (
    <div className="min-h-dvh w-full max-w-full flex items-stretch justify-start bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <ScrollToTop containerRef={scrollContainerRef} />

      {/* Sidebar */}
      {!isHome ? <Sidebar /> : null}

      <div className="w-full flex flex-col items-start justify-start overflow-hidden">
        {/* Header */}
        <Header />

        <div
          ref={scrollContainerRef}
          className={cn(
            "w-full max-h-[calc(100dvh-128px)] md:max-h-dvh overflow-y-auto no-scrollbar md:pb-10",
            isHome && "max-h-[calc(100dvh-65px)]"
          )}
        >
          <Outlet />
        </div>

        {/* BottomNavbar */}
        {!isHome ? <BottomNavbar /> : null}
      </div>
    </div>
  );
};

export default Layout;
