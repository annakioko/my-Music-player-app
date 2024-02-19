import React from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaBook, FaArrowRight, FaHome, FaPhoneAlt,} from "react-icons/fa";

export default function SideBar() {
  
  function SideButton({ title, to, icon: Icon }) {
    return (
      <Link
        to={to}
        className="flex items-center text-white mb-4 ml-3 sm:mb-6"
        /*onClick={title === "Log Out" ? handleClick : undefined}*/
      >
        <Icon size={25} className="mr-2" />
        <span className="hidden sm:inline-block">{title}</span>
      </Link>
    );
  }

  return (
    <div className="h-full w-1/4 bg-gray-950">
      <div className="flex items-center text-xl p-4">
        <FaMusic size={70} className="text-white mr-4" />
        <span className="text-white font-bold hidden sm:inline-block">
          Groovy
        </span>
      </div>
      <div className="p-4  mt-9">
        <SideButton title="home" to="/Home" icon={FaHome} />
        <SideButton title="Library" to="/library" icon={FaBook} />
        <SideButton title="login" to="/LogIn" icon={FaArrowRight} />
        <SideButton title="contacts" to="/Contacts" icon={FaPhoneAlt} />
      </div>
    </div>
  );
}
