import { useRef } from "react";
import { Outlet } from "react-router";

import Header from "./Header";
import Sidebar from "./Sidebar";
import ButtonNavbar from "./ButtonNavbar";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="min-h-dvh w-full max-w-full flex items-stretch justify-start bg-slate-50 overflow-hidden">
      <ScrollToTop containerRef={scrollContainerRef} />

      {/* Sidebar */}
      <Sidebar />

      <div className="w-full flex flex-col items-start justify-start overflow-hidden">
        {/* Header */}
        <Header />

        <div
          ref={scrollContainerRef}
          className="w-full max-h-[calc(100dvh-128px)] md:max-h-dvh overflow-y-auto"
        >
          <Outlet />
        </div>

        {/* ButtonNavbar */}
        <ButtonNavbar />
      </div>
    </div>
  );
};

export default Layout;
