import { useState } from "react";
import { GiJupiter } from "react-icons/gi";
import { HiMiniHome } from "react-icons/hi2";
import { IoEarth, IoPlanetOutline } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

import { cn } from "../../utils/cn";

const Sidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const sidebarItems = [
    {
      title: "Home",
      route: "/",

      icon: (
        <HiMiniHome
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },
    {
      title: "Mercury",
      route: "/mercury",
      icon: (
        <MdOutlineCircle
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/mercury"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },
    {
      title: "Venus",
      route: "/venus",
      icon: (
        <MdOutlineCircle
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/venus"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },

    {
      title: "Earth",
      route: "/earth",
      icon: (
        <IoEarth
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/earth"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Mars",
      route: "/mars",
      icon: (
        <MdOutlineCircle
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/mars"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },

    {
      title: "Jupiter",
      route: "/jupiter",
      icon: (
        <GiJupiter
          className={`size-8 min-w-8 flex items-center justify-center transition-all duration-300 ${
            location.pathname === "/jupiter"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },

    {
      title: "Saturn",
      route: "/saturn",
      icon: (
        <IoPlanetOutline
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/saturn"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },

    {
      title: "Uranus",
      route: "/uranus",
      icon: (
        <MdOutlineCircle
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/uranus"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },

    {
      title: "Neptune",
      route: "/neptune",
      icon: (
        <MdOutlineCircle
          className={`size-8 min-w-8 transition-all duration-300 ${
            location.pathname === "/neptune"
              ? "text-white"
              : "text-black dark:text-slate-400 "
          }`}
        />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "overflow-y-auto no-scrollbar relative z-50 hidden h-dvh md:flex flex-col justify-start gap-2 p-4 bg-white dark:bg-slate-800 border-r border-r-slate-200 dark:border-r-slate-700 transition-all duration-300",
        show
          ? "w-[220px] min-w-[220px] items-start justify-start pl-4 p-6"
          : "w-20 min-w-20 items-center"
      )}
    >
      <button
        className={cn(
          "w-full flex items-center justify-start p-2 border-none bg-white dark:bg-slate-800 dark:text-slate-400  focus:outline-none",
          show ? "" : "pl-[6px]"
        )}
        onClick={() => setShow((prev) => !prev)}
      >
        <p className="text-4xl">
          {show ? <GoSidebarExpand /> : <GoSidebarCollapse />}
        </p>
      </button>

      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={cn(
            "w-full h-12 flex items-center justify-start gap-4 p-2 rounded-lg transition-all duration-300",
            location.pathname === item.route
              ? "dark:bg-slate-600 bg-blue-500"
              : "hover:dark:bg-slate-700 hover:bg-slate-100 ",
            show ? "" : "w-14  pl-[12px]"
          )}
        >
          {item?.icon}

          <p
            className={cn(
              "font-bold flex",
              show ? "animate-show" : "animate-hide",
              location.pathname === item.route
                ? "text-white"
                : "text-slate-900 dark:text-slate-400"
            )}
          >
            {item?.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
