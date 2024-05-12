import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import LogoH from "./../assets/Images/logoH.png"
import { ThemeContext } from "../Context/ThemeContext"; // Corrected import path
import { FaRegSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";


const Header = () => {
const {theme,setTheme} =useContext(ThemeContext)
useEffect(() =>{
 console.log("Theme",theme)
},[])
const [toggle,setToggle] = useState(true)

  return (
    <div className="flex items-center mx-2">
      <img src={LogoH} alt="Logo" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <FaSearch />
        <input
          type="text"
          placeholder="Search Your Games!"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme =='light' ? (
          <MdDarkMode
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <FaRegSun
            onClick={() => {setTheme('light');localStorage.setItem("theme", "light");}}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
