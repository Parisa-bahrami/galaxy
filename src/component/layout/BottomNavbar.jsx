import { Link, useLocation } from "react-router-dom";
import { MdOutlineCircle } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { IoPlanetOutline } from "react-icons/io5";
import { GiJupiter } from "react-icons/gi";
import { HiMiniHome } from "react-icons/hi2";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";

import { BsThreeDots } from "react-icons/bs";

const BottomNavbar = () => {
  const location = useLocation();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const sidebarItems = [
    {
      title: "Home",
      route: "/",
      icon: (
        <HiMiniHome
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },
    {
      title: "Mercury",
      route: "/mercury",
      icon: (
        <MdOutlineCircle
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/mercury"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },
    {
      title: "Venus",
      route: "/venus",
      icon: (
        <MdOutlineCircle
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/venus"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Earth",
      route: "/earth",
      icon: (
        <IoEarth
          className={`text-4xl transition-all duration-300 ${
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
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/mars"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Jupiter",
      route: "/jupiter",
      icon: (
        <GiJupiter
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/jupiter"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Saturn",
      route: "/saturn",
      icon: (
        <IoPlanetOutline
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/saturn"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Uranus",
      route: "/uranus",
      icon: (
        <MdOutlineCircle
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/uranus"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },

    {
      title: "Neptune",
      route: "/neptune",
      icon: (
        <MdOutlineCircle
          className={`text-4xl transition-all duration-300 ${
            location.pathname === "/neptune"
              ? "text-white"
              : "text-black dark:text-slate-400"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="md:hidden h-16 fixed bottom-0 inset-x-0 flex items-center justify-around bg-white dark:bg-slate-800 border-t border-t-slate-200 dark:border-t-slate-700">
      {sidebarItems.slice(0, 5).map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={`size-14 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
            location.pathname === item.route
              ? "dark:bg-slate-600 bg-blue-500"
              : "hover:dark:bg-slate-500 hover:bg-slate-50 "
          }`}
        >
          {item?.icon}
        </Link>
      ))}

      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger className="text-lg transition-all duration-300 focus:border-none focus:outline-none border-none dark:bg-slate-800 dark:text-slate-400 ring-0 ">
          <BsThreeDots />
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-2 dark:bg-slate-800 dark:border-slate-700"
          sideOffset={14}
        >
          {sidebarItems.slice(5).map((item, index) => (
            <Link
              key={index}
              to={item.route}
              onClick={() => setIsPopoverOpen(false)}
              className={`size-14 flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                location.pathname === item.route
                  ? "dark:bg-slate-600 bg-blue-500"
                  : "hover:dark:bg-slate-500 hover:bg-slate-50 "
              }`}
            >
              {item?.icon}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BottomNavbar;
