import { useState } from "react";
import { GiJupiter } from "react-icons/gi";
import { HiMiniHome } from "react-icons/hi2";
import { IoEarth,IoPlanetOutline } from "react-icons/io5";
import { MdOutlineCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
const Sidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const sidebarItems = [
    {
      title: "Home",
      route: "/",

      icon: (
        <HiMiniHome
          className={`size-10 min-w-10 transition-all duration-300 ${
            location.pathname === "/" ? "text-white" : "text-black "
          }`}
        />
      ),
    },
    {
      title: "Mercury",
      route: "/mercury",
      icon: (
        <MdOutlineCircle
          className={`size-7 min-w-7 transition-all duration-300 ${
            location.pathname === "/mercury" ? "text-white" : "text-black "
          }`}
        />
      ),
    },
    {
      title: "Venus",
      route: "/venus",
      icon: (
        <MdOutlineCircle
          className={`size-11 min-w-11 transition-all duration-300 ${
            location.pathname === "/venus" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Earth",
      route: "/earth",
      icon: (
        <IoEarth
          className={`size-11 min-w-11 transition-all duration-300 ${
            location.pathname === "/earth" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Mars",
      route: "/mars",
      icon: (
        <MdOutlineCircle
          className={`size-9 min-w-9 transition-all duration-300 ${
            location.pathname === "/mars" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Jupiter",
      route: "/jupiter",
      icon: (
        <GiJupiter
          className={`size-12 min-w-12 flex items-center justify-center transition-all duration-300 ${
            location.pathname === "/jupiter" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Saturn",
      route: "/saturn",
      icon: (
        <IoPlanetOutline
          className={`size-10 min-w-10 transition-all duration-300 ${
            location.pathname === "/saturn" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Uranus",
      route: "/uranus",
      icon: (
        <MdOutlineCircle
          className={`size-10 min-w-10 transition-all duration-300 ${
            location.pathname === "/uranus" ? "text-white" : "text-black "
          }`}
        />
      ),
    },

    {
      title: "Neptune",
      route: "/neptune",
      icon: (
        <MdOutlineCircle
          className={`size-10 min-w-10 transition-all duration-300 ${
            location.pathname === "/neptune" ? "text-white" : "text-black "
          }`}
        />
      ),
    },
  ];

  return (
    <div
      className={`overflow-y-auto no-scrollbar relative z-50 hidden h-dvh md:flex flex-col justify-start gap-2 p-4 bg-white dark:bg-slate-800 border-r border-r-slate-200 transition-all duration-300 ${
        show
          ? "w-[220px] min-w-[220px] items-start justify-start pl-4 p-6"
          : "w-20 min-w-20 items-center"
      }`}
    >
      <button
        className=" flex items-center justify-center p-3 border-none bg-white   dark:bg-slate-800 dark:text-slate-400  focus:outline-none"
        onClick={() => setShow((prev) => !prev)}
      >
        <p 
      className="text-4xl"
        >
  {show?  <GoSidebarExpand />:<GoSidebarCollapse />}
        </p>
      </button>

      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.route}
          className={`w-full h-14 flex items-center justify-center  gap-16 p-6 rounded-lg transition-all duration-300 ${
            location.pathname === item.route
              ? "dark:bg-slate-600 bg-blue-500"
              :  "hover:dark:bg-slate-500 hover:bg-slate-100 "
          } ${show ? "" : "w-14"} `}
        >
          {/* <item.icon
            className={`text-3xl transition-all duration-300 ${
              location.pathname === item.route ? "text-white" : "text-black "
            }`}
          /> */}
          {item?.icon}

          <p
            className={`font-bold flex ${
              show ? "animate-show" : "animate-hide"
            }`}
          >
            {item?.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
