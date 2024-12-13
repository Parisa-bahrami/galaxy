import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const prettifyTitle = (title) => {
    const newTitle = title.replace("/", "");

    return newTitle;
  };

  return (
 
    <div className="md:hidden w-full h-16 flex items-center justify-center bg-white">
      <p className=" md:hidden text-2xl font-bold capitalize">
        {prettifyTitle(location.pathname) || "Home"}
      </p>
    </div>
    
  );
};

export default Header;
